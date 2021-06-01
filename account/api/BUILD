package(default_visibility = ["//visibility:public"])

load("//tools:build_rules/go.bzl", "go_binary")
load("@io_bazel_rules_docker//container:container.bzl", "container_image")

go_binary(
    name = "accountapi",
    srcs = [
        "account.pb.go",
        "account.pb.gw.go",
        "rice-box.go",
        "main.go",
    ],
    deps = [
        "//account",
        "//apidocs",
        "//environments",
        "//healthcheck",
        "@go_rice//:go.rice",
        "@go_rice//:embedded",
        "@go_gogo_protobuf//:gogoproto",
        "@go_gogo_protobuf//:proto",
        "@go_gogo_protobuf//:types",
        "@go_gorilla_mux//:mux",
        "@go_grpc//:grpc",
        "@go_grpc//:status",
        "@go_grpc//:codes",
        "@go_grpc//:grpclog",
        "@go_grpc//:metadata",
        "@go_grpc_gateway//:runtime",
        "@go_genproto//:googleapis/api/annotations",
        "@go_grpc_gateway//:utilities",
        "@go_logrus//:logrus",
        "@go_protobuf//:proto",
        "@go_protobuf//:ptypes/empty",
        "@go_protobuf//:ptypes/timestamp",
        "@go_protobuf//:descriptor",
        "@go_protobuf_official//:reflect/protoreflect",
        "@go_protobuf_official//:runtime/protoimpl",
        "@go_protobuf_official//:types/known/emptypb",
        "@go_protobuf_official//:types/known/timestamppb",
        "@go_x_net//:context",
    ],
)

container_image(
    name = "docker",
    base = "@ubuntu//image",
    cmd = "./accountapi",
    files = [
        ":accountapi",
    ],
    visibility = ["//visibility:public"],
)
