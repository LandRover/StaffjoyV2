package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "github.com/GeertJohan/go.rice",
    deps = [
        "@go_zipexe//:go.zipexe",
        "@go_rice//:embedded",
        
    ],
)

external_go_package(
    name = "embedded",
    base_pkg = "github.com/GeertJohan/go.rice",
)