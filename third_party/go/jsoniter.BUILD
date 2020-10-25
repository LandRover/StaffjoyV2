package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "github.com/json-iterator/go",
    deps = [
        "@modern_reflect2//:reflect2",
        "@modern_concurrent//:concurrent",
    ],
    exclude_srcs = [
        "iter_skip_strict.go",
    ],
)
