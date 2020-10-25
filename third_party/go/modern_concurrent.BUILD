package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "github.com/modern-go/concurrent",
    exclude_srcs = [
        "go_below_*.go",
    ],
)
