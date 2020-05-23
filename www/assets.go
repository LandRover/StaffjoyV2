package main

import (
	"html/template"
	"os"
	"reflect"

	"github.com/russross/blackfriday/v2"

	rice "github.com/GeertJohan/go.rice"
)

var (
	// Subfolders that are served directly
	assetPaths = []string{"assets/js", "assets/css", "assets/images", "assets/data", "assets/fonts", "assets/breaktime-cover"}

	loadingState        = false
	tmpl                *template.Template
	jsBox               *rice.Box
	cssBox              *rice.Box
	imagesBox           *rice.Box
	dataBox             *rice.Box
	fontBox             *rice.Box
	breakTimeCoverBox   *rice.Box
	templatesBox        *rice.Box
	breaktimeContentBox *rice.Box
	breaktimeSource     = make(map[string]string)
)

func loadAssets() bool {
	// @TODO find better, clean solution for the double init, may happen in tests only.
	if loadingState {
		logger.Debugf("loadAssets already loaded once. skipping.")
		return true
	}
	loadingState = true

	initAllTemplates()
	loadBreaktime()

	jsBox = rice.MustFindBox("assets/js")
	cssBox = rice.MustFindBox("assets/css")
	imagesBox = rice.MustFindBox("assets/images")
	dataBox = rice.MustFindBox("assets/data")
	fontBox = rice.MustFindBox("assets/fonts")
	breakTimeCoverBox = rice.MustFindBox("assets/breaktime-cover")

	return true
}

// Added in template
func hasField(v interface{}, name string) bool {
	rv := reflect.ValueOf(v)
	if rv.Kind() == reflect.Ptr {
		rv = rv.Elem()
	}
	if rv.Kind() != reflect.Struct {
		return false
	}
	return rv.FieldByName(name).IsValid()
}

// initializes templateHolder
func initAllTemplates() {
	templatesBox = rice.MustFindBox("assets/templates")
	template.New("HTMLTemplates")
	templatesBox.Walk("", func(path string, i os.FileInfo, e error) error {
		if i.IsDir() {
			return nil
		}

		str, err := templatesBox.String(path)
		if err != nil {
			logger.Fatalf("Failed to load template: %s\n%s\n", path, err)
		}

		// Create template on first loop
		if tmpl == nil {
			tmpl, err = template.New(path).Funcs(template.FuncMap{"hasField": hasField}).Parse(string(str))
		} else {
			tmpl, err = tmpl.New(path).Funcs(template.FuncMap{"hasField": hasField}).Parse(string(str))
		}

		if err != nil {
			logger.Panicf("Unable to parse template - %s", err)
		}

		return nil
	})
}

func loadBreaktime() {
	breaktimeContentBox = rice.MustFindBox("assets/breaktime-content")
	template.New("BreaktimeContent")
	breaktimeContentBox.Walk("", func(path string, i os.FileInfo, e error) error {
		if i.IsDir() {
			return nil
		}

		sourceData, err := breaktimeContentBox.Bytes(path)
		if err != nil {
			logger.Panicf("Unable to locate specified asset - %s", err)
		}

		// Create breaktime on first loop
		breaktimeSource[path] = string(blackfriday.Run(sourceData, blackfriday.WithNoExtensions()))

		return nil
	})
}
