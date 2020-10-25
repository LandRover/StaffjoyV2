package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "github.com/mailgun/mailgun-go/v4",
    deps = [
        "@jsoniter//:go",
        "@go_mailgun//:events",
        "@go_pkg_errors//:errors",
    ],
    exclude_srcs = [
        "mock*.go",
    ],
)

external_go_package(
    base_pkg = "github.com/mailgun/mailgun-go/v4",
    name = "events",
    deps = [
        "@jsoniter//:go",
    ],
)
