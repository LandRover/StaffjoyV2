package(default_visibility = ["//visibility:public"])

load("//tools:build_rules/go.bzl", "go_binary")
load("@io_bazel_rules_docker//container:container.bzl", "container_image")

go_binary(
    name = "companyapi",
    srcs = [
        "rice-box.go",
        "company.pb.go",
        "company.pb.gw.go",
        "main.go",
    ],
    deps = [
        "//apidocs",
        "//company",
        "//environments",
        "//healthcheck",
        "@go_rice//:go.rice",
        "@go_rice//:embedded",
        "@go_gogo_protobuf//:gogoproto",
        "@go_gogo_protobuf//:proto",
        "@go_gogo_protobuf//:types",
        "@go_gorilla_mux//:mux",
        "@go_grpc//:codes",
        "@go_grpc//:status",
        "@go_grpc//:grpc",
        "@go_grpc//:grpclog",
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
        "@go_x_net//:context",
    ],
)

container_image(
    name = "docker",
    base = "@ubuntu//image",
    cmd = "./companyapi",
    files = [
        ":companyapi",
    ],
    visibility = ["//visibility:public"],
)
