package(default_visibility = ["//visibility:public"])

load("//tools:build_rules/go.bzl", "go_library")

go_library(
    name = "errorpages",
    srcs = [
        "rice-box.go",
        "errorpages.go",
    ],
    deps = [
        "@go_rice//:go.rice",
        "@go_rice//:embedded",
    ],
)
