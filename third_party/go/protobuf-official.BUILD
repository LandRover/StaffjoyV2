package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "google.golang.org/protobuf",
)

external_go_package(
    name = "proto",
    base_pkg = "google.golang.org/protobuf",
    deps = [
      "@go_protobuf_official//:internal/strs",
      "@go_protobuf_official//:internal/flags",
      "@go_protobuf_official//:internal/pragma",
      "@go_protobuf_official//:internal/fieldsort",
      "@go_protobuf_official//:internal/mapsort",
      "@go_protobuf_official//:internal/errors",
      "@go_protobuf_official//:internal/genid",
      "@go_protobuf_official//:internal/encoding/messageset",
      "@go_protobuf_official//:encoding/protowire",
      "@go_protobuf_official//:reflect/protoregistry",
      "@go_protobuf_official//:reflect/protoreflect",
      "@go_protobuf_official//:runtime/protoiface",
    ],
    exclude_srcs = [
      "proto_methods.go",
    ],
)

external_go_package(
     name = "reflect/protoreflect",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:encoding/protowire",
     ],
     exclude_srcs = [
       "value_unsafe.go",
     ],
)

external_go_package(
     name = "reflect/protoregistry",
     base_pkg = "google.golang.org/protobuf",
     deps = [
        "@go_protobuf_official//:reflect/protoreflect",
        "@go_protobuf_official//:internal/errors",
     ],
)


external_go_package(
     name = "reflect/protodesc",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:proto",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/flags",
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:internal/genid",
       "@go_protobuf_official//:internal/filedesc",
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:internal/encoding/defval",
       "@go_protobuf_official//:encoding/protowire",
       "@go_protobuf_official//:types/descriptorpb",
     ],
)

external_go_package(
     name = "internal/filedesc",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:proto",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:internal/descopts",
       "@go_protobuf_official//:internal/descfmt",
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:internal/genid",
       "@go_protobuf_official//:encoding/protowire",
       "@go_protobuf_official//:internal/encoding/defval",
     ],
)

external_go_package(
     name = "encoding/protojson",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:proto",
       "@go_protobuf_official//:internal/set",
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/flags",
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:internal/encoding/json",
       "@go_protobuf_official//:internal/encoding/messageset",
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:internal/genid",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/encoding/json",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/detrand",
       "@go_protobuf_official//:internal/errors",
     ],
)

external_go_package(
     name = "encoding/protowire",
     base_pkg = "google.golang.org/protobuf",
     deps = [
         "@go_protobuf_official//:internal/errors",
     ],
)

external_go_package(
     name = "runtime/protoimpl",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/impl",
       "@go_protobuf_official//:internal/filedesc",
       "@go_protobuf_official//:internal/filetype",
       "@go_protobuf_official//:internal/version",
     ],
)

external_go_package(
     name = "runtime/protoiface",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/genid",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/pragma",
     base_pkg = "google.golang.org/protobuf",
)

external_go_package(
     name = "internal/detrand",
     base_pkg = "google.golang.org/protobuf",
)

external_go_package(
     name = "internal/fieldsort",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/mapsort",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/descopts",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/descfmt",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:internal/detrand",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/encoding/defval",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:internal/encoding/text",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/encoding/text",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/flags",
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:internal/detrand",
     ],
)

external_go_package(
     name = "internal/encoding/messageset",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:encoding/protowire",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/encoding/tag",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:internal/filedesc",
       "@go_protobuf_official//:internal/encoding/defval",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/strs",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/flags",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
     exclude_srcs = [
       "strings_unsafe.go",
     ],
)

external_go_package(
     name = "internal/flags",
     base_pkg = "google.golang.org/protobuf",
     exclude_srcs = [
       "proto_legacy_enable.go",
     ],
)

external_go_package(
     name = "internal/filetype",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/descopts",
       "@go_protobuf_official//:internal/filedesc",
       "@go_protobuf_official//:internal/impl",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/impl",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:proto",
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/flags",
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:internal/genid",
       "@go_protobuf_official//:internal/fieldsort",
       "@go_protobuf_official//:internal/filedesc",
       "@go_protobuf_official//:internal/descopts",
       "@go_protobuf_official//:internal/encoding/messageset",
       "@go_protobuf_official//:internal/encoding/tag",
       "@go_protobuf_official//:encoding/prototext",
       "@go_protobuf_official//:encoding/protowire",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoiface",
     ],
     exclude_srcs = [
       "codec_unsafe.go",
       "pointer_unsafe.go",
       "codec_map_go111.go",
     ],
)

external_go_package(
     name = "internal/set",
     base_pkg = "google.golang.org/protobuf",
)


external_go_package(
     name = "encoding/prototext",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:proto",
       "@go_protobuf_official//:encoding/protowire",
       "@go_protobuf_official//:internal/set",
       "@go_protobuf_official//:internal/strs",
       "@go_protobuf_official//:internal/flags",
       "@go_protobuf_official//:internal/pragma",
       "@go_protobuf_official//:internal/mapsort",
       "@go_protobuf_official//:internal/errors",
       "@go_protobuf_official//:internal/genid",
       "@go_protobuf_official//:internal/encoding/text",
       "@go_protobuf_official//:internal/encoding/messageset",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:reflect/protoreflect",
     ],
)

external_go_package(
     name = "internal/errors",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:internal/detrand",
     ],
     exclude_srcs = [
       "is_go112.go",
     ],
)

external_go_package(
     name = "internal/version",
     base_pkg = "google.golang.org/protobuf",
)

external_go_package(
     name = "types/descriptorpb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoimpl",
       "@go_protobuf_official//:runtime/protoiface",
     ],
)

external_go_package(
     name = "types/known/fieldmaskpb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:proto",
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoimpl",
     ],
)

external_go_package(
     name = "types/known/wrapperspb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoimpl",
     ],
)

external_go_package(
     name = "types/known/structpb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
        "@go_protobuf_official//:reflect/protoreflect",
        "@go_protobuf_official//:runtime/protoimpl",
        "@go_protobuf_official//:encoding/protojson",
     ],
)

external_go_package(
     name = "types/known/durationpb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoimpl",
     ],
)

external_go_package(
     name = "types/known/timestamppb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoimpl",
     ],
)

external_go_package(
     name = "types/known/anypb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:proto",
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:reflect/protoregistry",
       "@go_protobuf_official//:runtime/protoimpl",
     ],
)

external_go_package(
     name = "types/pluginpb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoimpl",
       "@go_protobuf_official//:types/descriptorpb",
     ],
)

external_go_package(
     name = "types/known/emptypb",
     base_pkg = "google.golang.org/protobuf",
     deps = [
       "@go_protobuf_official//:reflect/protoreflect",
       "@go_protobuf_official//:runtime/protoimpl",
     ],
)
