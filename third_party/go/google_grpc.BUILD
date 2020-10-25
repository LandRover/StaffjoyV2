package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_x_net//:context",
        "@go_x_net//:trace",
        "@go_x_net//:http2",
        "@go_grpc//:backoff",
        "@go_grpc//:balancer",
        "@go_grpc//:balancer/base",
        "@go_grpc//:balancer/roundrobin",
        "@go_grpc//:encoding",
        "@go_grpc//:encoding/proto",
        "@go_grpc//:grpclog",
        "@go_grpc//:keepalive",
        "@go_grpc//:peer",
        "@go_grpc//:codes",
        "@go_grpc//:resolver",
        "@go_grpc//:credentials",
        "@go_grpc//:connectivity",
        "@go_grpc//:metadata",
        "@go_grpc//:internal",
        "@go_grpc//:status",
        "@go_grpc//:stats",
        "@go_grpc//:tap",
        "@go_grpc//:serviceconfig",
        "@go_grpc//:resolver/dns",
        "@go_grpc//:internal/buffer",
        "@go_grpc//:internal/grpcutil",
        "@go_grpc//:internal/grpcrand",
        "@go_grpc//:internal/backoff",
        "@go_grpc//:internal/channelz",
        "@go_grpc//:internal/envconfig",
        "@go_grpc//:internal/binarylog",
        "@go_grpc//:internal/balancerload",
        "@go_grpc//:internal/grpcsync",
        "@go_grpc//:internal/transport",
        "@go_grpc//:internal/serviceconfig",
        "@go_grpc//:internal/resolver/dns",
        "@go_grpc//:internal/resolver/passthrough",
        "@go_grpc//:resolver/passthrough",
        "@go_protobuf//:proto",
    ],
)

external_go_package(
    name = "backoff",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "encoding",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "encoding/proto",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:encoding",
        "@go_protobuf//:proto",
    ],
)

external_go_package(
    name = "grpclog",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:internal/grpclog",
    ]
)

external_go_package(
    name = "internal/envconfig",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "internal/balancerload",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:metadata",
    ]
)

external_go_package(
    name = "internal/binarylog",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:status",
        "@go_grpc//:grpclog",
        "@go_grpc//:metadata",
        "@go_grpc//:internal/grpcutil",
        "@go_grpc//:binarylog/grpc_binarylog_v1",
        "@go_protobuf//:ptypes",
        "@go_protobuf//:proto",
    ],
)

external_go_package(
    name = "binarylog/grpc_binarylog_v1",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:codes",
        "@go_protobuf//:proto",
        "@go_protobuf//:ptypes/duration",
        "@go_protobuf//:ptypes/timestamp",
    ],
)

external_go_package(
    name = "internal/grpcsync",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "resolver/dns",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpclog",
        "@go_grpc//:resolver",
        "@go_grpc//:internal/backoff",
        "@go_grpc//:internal/grpcrand",
        "@go_grpc//:internal/resolver/dns",
    ],
)

external_go_package(
    name = "resolver/passthrough",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:resolver",
        "@go_grpc//:internal/resolver/passthrough",
    ],
)

external_go_package(
    name = "internal/syscall",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpclog",
    ],
    exclude_srcs = [
        "*_linux.go",
    ],
)

external_go_package(
    name = "internal/transport",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_x_net//:http2",
        "@go_x_net//:http2/hpack",
        "@go_grpc//:tap",
        "@go_grpc//:peer",
        "@go_grpc//:codes",
        "@go_grpc//:stats",
        "@go_grpc//:status",
        "@go_grpc//:grpclog",
        "@go_grpc//:internal",
        "@go_grpc//:resolver",
        "@go_grpc//:metadata",
        "@go_grpc//:keepalive",
        "@go_grpc//:credentials",
        "@go_grpc//:internal/grpcutil",
        "@go_grpc//:internal/grpcrand",
        "@go_grpc//:internal/channelz",
        "@go_grpc//:internal/syscall",
        "@go_genproto//:googleapis/rpc/status",
        "@go_protobuf//:proto",
    ],
)

external_go_package(
    name = "internal/backoff",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:backoff",
        "@go_grpc//:internal/grpcrand",
    ],
)

external_go_package(
    name = "internal/channelz",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpclog",
        "@go_grpc//:internal/grpclog",
        "@go_grpc//:connectivity",
        "@go_grpc//:credentials",
    ],
    exclude_srcs = [
        "*_linux.go",
    ],
)

external_go_package(
    name = "internal/grpcrand",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "balancer/roundrobin",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpclog",
        "@go_grpc//:resolver",
        "@go_grpc//:balancer",
        "@go_grpc//:balancer/base",
        "@go_grpc//:internal/grpcrand",
    ],
)

external_go_package(
    name = "balancer/grpclb/state",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:resolver",
    ],
)

external_go_package(
    name = "balancer/grpclb",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_cmp//:cmp",
        "@go_grpc//:grpc",
        "@go_grpc//:codes",
        "@go_grpc//:grpclog",
        "@go_grpc//:status",
        "@go_grpc//:internal",
        "@go_grpc//:metadata",
        "@go_grpc//:resolver",
        "@go_grpc//:keepalive",
        "@go_grpc//:balancer",
        "@go_grpc//:balancer/roundrobin",
        "@go_grpc//:balancer/grpclb/grpc_lb_v1",
        "@go_grpc//:internal/resolver/dns",
        "@go_grpc//:internal/backoff",
        "@go_grpc//:internal/grpcrand",
        "@go_grpc//:internal/channelz",
        "@go_grpc//:serviceconfig",
        "@go_grpc//:connectivity",
        "@go_grpc//:credentials",
        "@go_protobuf//:proto",
        "@go_protobuf//:ptypes/duration",
        "@go_protobuf//:ptypes/timestamp",
    ],
)

external_go_package(
    name = "balancer/grpclb/grpc_lb_v1",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpc",
        "@go_grpc//:codes",
        "@go_grpc//:status",
        "@go_grpc//:internal/resolver/dns",
        "@go_protobuf//:proto",
        "@go_protobuf//:ptypes/duration",
        "@go_protobuf//:ptypes/timestamp",
        "@go_x_net//:context",
    ],
)

external_go_package(
    name = "balancer/base",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:resolver",
        "@go_grpc//:grpclog",
        "@go_grpc//:balancer",
        "@go_grpc//:connectivity",
    ],
)

external_go_package(
    name = "status",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_x_net//:context",
        "@go_grpc//:codes",
        "@go_grpc//:internal/status",
        "@go_grpc//:internal",
        "@go_grpc//:connectivity",
        "@go_protobuf//:proto",
        "@go_protobuf//:ptypes",
        "@go_genproto//:googleapis/rpc/status",
    ],
)

external_go_package(
    name = "resolver",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:serviceconfig",
        "@go_grpc//:credentials",
        "@go_grpc//:attributes",
    ],
)

external_go_package(
    name = "serviceconfig",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "codes",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "balancer",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:resolver",
        "@go_grpc//:internal",
        "@go_grpc//:metadata",
        "@go_grpc//:credentials",
        "@go_grpc//:connectivity",
        "@go_grpc//:serviceconfig",
    ],
)

external_go_package(
    name = "credentials",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_x_net//:context",
        "@go_grpc//:internal",
        "@go_grpc//:internal/credentials",
        "@go_grpc//:attributes",
        "@go_protobuf//:proto",
    ],
)

external_go_package(
    name = "credentials/google",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:credentials",
        "@go_grpc//:credentials/alts",
        "@go_grpc//:credentials/oauth",
        "@go_grpc//:grpclog",
        "@go_grpc//:internal",
    ],
)
external_go_package(
    name = "credentials/alts",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpclog",
        "@go_grpc//:peer",
        "@go_grpc//:codes",
        "@go_grpc//:status",
        "@go_grpc//:credentials",
        "@go_grpc//:credentials/alts/internal",
        "@go_grpc//:credentials/alts/internal/handshaker",
        "@go_grpc//:credentials/alts/internal/handshaker/service",
        "@go_grpc//:credentials/alts/internal/proto/grpc_gcp",
    ],
)

external_go_package(
    name = "credentials/alts/internal",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:credentials",
    ],
)

external_go_package(
    name = "credentials/alts/internal/handshaker",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpc",
        "@go_grpc//:codes",
        "@go_grpc//:credentials",
        "@go_grpc//:credentials/alts/internal",
        "@go_grpc//:credentials/alts/internal/conn",
        "@go_grpc//:credentials/alts/internal/authinfo",
        "@go_grpc//:credentials/alts/internal/proto/grpc_gcp",
    ],
)
external_go_package(
    name = "credentials/alts/internal/handshaker/service",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpc",
    ],
)

external_go_package(
    name = "credentials/alts/internal/authinfo",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:credentials",
        "@go_grpc//:credentials/alts/internal/proto/grpc_gcp",
    ],
)

external_go_package(
    name = "credentials/alts/internal/proto/grpc_gcp",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:grpc",
        "@go_grpc//:codes",
        "@go_grpc//:status",
        "@go_protobuf//:proto",
        "@go_x_net//:context",
    ],
)

external_go_package(
    name = "credentials/alts/internal/conn",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_grpc//:credentials/alts/internal",
    ],
)

external_go_package(
    name = "credentials/oauth",
    base_pkg = "google.golang.org/grpc",
    deps = [
        "@go_x_net//:context",
        "@go_x_oauth2//:oauth2",
        "@go_x_oauth2//:google",
        "@go_x_oauth2//:jwt",
        "@go_grpc//:credentials",
    ],
)

external_go_package(
    name = "metadata",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_x_net//:context",
    ],
)

external_go_package(
    name = "peer",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_x_net//:context",
      "@go_grpc//:credentials",
    ],
)

external_go_package(
    name = "internal",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_x_net//:context",
      "@go_grpc//:serviceconfig",
      "@go_grpc//:connectivity",
    ],
)

external_go_package(
    name = "keepalive",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "connectivity",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_grpc//:grpclog",
      "@go_x_net//:context",
    ],
)

external_go_package(
    name = "stats",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_x_net//:context",
      "@go_grpc//:metadata",
      "@go_grpc//:grpclog",
    ],
)

external_go_package(
    name = "tap",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_x_net//:context",
    ],
)

external_go_package(
    name = "internal/grpclog",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "internal/serviceconfig",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_grpc//:balancer",
      "@go_grpc//:grpclog",
      "@go_grpc//:serviceconfig",
    ],
)

external_go_package(
    name = "internal/status",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_grpc//:codes",
      "@go_protobuf//:proto",
      "@go_protobuf//:ptypes",
      "@go_genproto//:googleapis/rpc/status",
    ]
)

external_go_package(
    name = "attributes",
    base_pkg = "google.golang.org/grpc",
)

external_go_package(
    name = "internal/grpcutil",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_grpc//:resolver",
      "@go_grpc//:metadata",
    ]
)

external_go_package(
    name = "internal/buffer",
    base_pkg = "google.golang.org/grpc",
)



external_go_package(
    name = "internal/resolver/dns",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_grpc//:resolver",
      "@go_grpc//:grpclog",
      "@go_grpc//:serviceconfig",
      "@go_grpc//:balancer/grpclb/state",
      "@go_grpc//:internal/envconfig",
      "@go_grpc//:internal/grpcrand",
    ]
)

external_go_package(
    name = "internal/resolver/passthrough",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_grpc//:resolver",
    ]
)

external_go_package(
    name = "internal/credentials",
    base_pkg = "google.golang.org/grpc",
    deps = [
      "@go_grpc//:grpclog",
    ],
    exclude_srcs = [
        "*_appengine.go",
    ],
)
