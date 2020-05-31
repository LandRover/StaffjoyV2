package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "github.com/google/go-cmp",
)

external_go_package(
     name = "cmp",
     base_pkg = "github.com/google/go-cmp",
     deps = [
       "@go_cmp//:cmp/internal/value",
       "@go_cmp//:cmp/internal/flags",
       "@go_cmp//:cmp/internal/diff",
       "@go_cmp//:cmp/internal/function",
     ],
     exclude_srcs = [
       "export_unsafe.go",
     ]
)

external_go_package(
     name = "cmp/internal/diff",
     base_pkg = "github.com/google/go-cmp",
     exclude_srcs = [
        "debug_enable.go",
     ]
)

external_go_package(
     name = "cmp/internal/flags",
     base_pkg = "github.com/google/go-cmp",
     exclude_srcs = [
        "*_legacy.go",
     ]
)

external_go_package(
     name = "cmp/internal/function",
     base_pkg = "github.com/google/go-cmp",
)

external_go_package(
     name = "cmp/internal/value",
     base_pkg = "github.com/google/go-cmp",
     exclude_srcs = [
       "pointer_unsafe.go",
     ]
)

