package(default_visibility = ["@//visibility:public"])

load("@//third_party:go/build.bzl", "external_go_package")

external_go_package(
    base_pkg = "google.golang.org/genproto",
)

external_go_package(
    base_pkg = "google.golang.org/genproto",
    name = "googleapis/rpc/status",
    deps = [
        "@go_protobuf//:proto",
        "@go_protobuf//:ptypes/any",
        "@go_protobuf_official//:reflect/protoreflect",
        "@go_protobuf_official//:runtime/protoimpl",
    ],
)

external_go_package(
    name = "protobuf/field_mask",
    base_pkg = "google.golang.org/genproto",
    deps = [
        "@go_protobuf//:proto",
        "@go_protobuf_official//:types/known/fieldmaskpb",
    ],
)

external_go_package(
    name = "googleapis/api/annotations",
    base_pkg = "google.golang.org/genproto",
    deps = [
        "@go_protobuf//:proto",
        "@go_protobuf//:protoc-gen-go/descriptor",
        "@go_protobuf_official//:reflect/protoreflect",
        "@go_protobuf_official//:runtime/protoimpl",
    ],
)

external_go_package(
    name = "googleapis/api/httpbody",
    base_pkg = "google.golang.org/genproto",
    deps = [
        "@go_protobuf//:proto",
        "@go_protobuf//:ptypes/any",
        "@go_protobuf_official//:reflect/protoreflect",
        "@go_protobuf_official//:runtime/protoimpl",
    ],
)

