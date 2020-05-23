package(default_visibility = ["//visibility:public"])

load("//tools:build_rules/go.bzl", "go_library")

go_library(
    name = "apidocs",
    srcs = [
        "rice-box.go",
        "assets.go",
        "serve.go",
    ],
    deps = [
        "@go_rice//:go.rice",
        "@go_rice//:embedded",
        "@go_logrus//:logrus",
    ],
)
