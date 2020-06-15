package main

import (
	"bytes"
	"context"
	"flag"
	"fmt"
	"net/http"
	_ "net/http/pprof"
	"os"
)

var (
	hostPort = flag.String("host-port", ":12345", "hostport for pprof")
)

func main() {
	flag.Parse()
	fmt.Printf("starting envserver on %s\n", *hostPort)
	http.HandleFunc("/debug/env", httpEnvHandler)
	http.ListenAndServe(*hostPort, nil)
}

// httpEnvHandler writes all os.Environs to the page
func httpEnvHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.WithValue(r.Context(), "a", "b")
	r = r.WithContext(ctx)

	fmt.Println(r.Context().Value("a"))
	b := new(bytes.Buffer)
	for _, e := range os.Environ() {
		fmt.Fprintln(b, e)
	}
	fmt.Fprintf(w, b.String())
}
