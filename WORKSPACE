load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_file")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository", "new_git_repository")

## Load docker rules
IO_RULES_DOCKER_VERSION="0.22.0"
http_archive(
    name = "io_bazel_rules_docker",
    urls = ["https://github.com/bazelbuild/rules_docker/releases/download/v%s/rules_docker-v%s.tar.gz" % (IO_RULES_DOCKER_VERSION, IO_RULES_DOCKER_VERSION)],
    strip_prefix = "rules_docker-%s" % IO_RULES_DOCKER_VERSION,
)


# DOCKER STUFF
load(
    "@io_bazel_rules_docker//repositories:repositories.bzl",
    container_repositories = "repositories",
)
container_repositories()

load(
    "@io_bazel_rules_docker//container:container.bzl",
    "container_pull",
)

load(
    "@io_bazel_rules_docker//repositories:go_repositories.bzl",
    container_go_deps = "go_deps",
)
container_go_deps()

container_pull(
    name = "nginx",
    registry ="index.docker.io",
    repository = "library/nginx",
    tag = "latest",
)

container_pull(
    name = "ubuntu",
    registry ="index.docker.io",
    repository = "library/ubuntu",
    tag = "focal",
)

# Required by IO_RULES_DOCKER_VERSION > 0.14.4 (https://github.com/bazelbuild/rules_docker/issues/1550)
load("@io_bazel_rules_docker//repositories:deps.bzl", container_deps = "deps")    
container_deps()

# GOLANG INIT

load("//tools/go:go_configure.bzl", "go_configure")

go_configure()

bind(
    name = "go_package_prefix",
    actual = "//:go_package_prefix",
)

# GOLANG DEPS

new_git_repository(
    name = "go_recaptcha",
    build_file = "//:third_party/go/dpapathanasiou_recaptcha.BUILD",
    commit = "be5090b17804c90a577d345b6d67acbf01dc90ed", # Jan 21, 2019 (LATEST)
    remote = "https://github.com/dpapathanasiou/go-recaptcha.git",
)

new_git_repository(
    name = "go_libphonenumber",
    build_file = "//:third_party/go/ttacon_libphonenumber.BUILD",
    commit = "759f71f653b20ae26a4ded88f69ed862055f0468", ## Mar 29, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/ttacon/libphonenumber.git",
)

new_git_repository(
    name = "go_builder",
    build_file = "//:third_party/go/ttacon_builder.BUILD",
    commit = "c099f663e1c235176c175644792c5eb282017ad7", # May 18, 2017 (LATEST GIT COMMIT)
    remote = "https://github.com/ttacon/builder.git",
)

new_git_repository(
    name = "go_jwt",
    build_file = "//:third_party/go/golang_jwt.BUILD",
    commit = "c435f38291bfed5322cf0f4ed12d1f8668ceaeb3", # v4.2.0 Nov 24, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/golang-jwt/jwt.git",
)

new_git_repository(
    name = "go_gorilla_sessions",
    build_file = "//:third_party/go/gorilla_sessions.BUILD",
    commit = "61fa50d034f99479a7de0d1c02c5e9dea5ad30cb", # v1.2.1 Aug 23, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/gorilla/sessions.git",
)

new_git_repository(
    name = "go_gorilla_securecookie",
    build_file = "//:third_party/go/gorilla_securecookie.BUILD",
    commit = "e59506cc896acb7f7bf732d4fdf5e25f7ccd8983", # v1.1.1 Feb 24, 2017 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/gorilla/securecookie.git",
)

new_git_repository(
    name = "go_gorilla_csrf",
    build_file = "//:third_party/go/gorilla_csrf.BUILD",
    commit = "b69cbb30a1ca62a91c30fc52f16a3cb24a73a8f7", # v1.7.1 Jul 29, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/gorilla/csrf.git",
)

new_git_repository(
    name = "go_gorilla_mux",
    build_file = "//:third_party/go/gorilla_mux.BUILD",
    commit = "98cb6bf42e086f6af920b965c38cacc07402d51b", # v1.8.0 Aug 22, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/gorilla/mux.git",
)

new_git_repository(
    name = "go_pkg_errors",
    build_file = "//:third_party/go/pkg_errors.BUILD",
    commit = "614d223910a179a466c1767a985424175c39b465", # v0.9.1 Jan 14, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/pkg/errors.git",
)

new_git_repository(
    name = "go_mailgun",
    build_file = "//:third_party/go/go_mailgun.BUILD",
    commit = "e41a962e5ecfd1eeeb035c15f3b5189d26e7204e", # v4.6.0 Nov 17, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/mailgun/mailgun-go.git",
)

new_git_repository(
    name = "jsoniter",
    build_file = "//:third_party/go/jsoniter.BUILD",
    commit = "024077e996b048517130b21ea6bf12aa23055d3d", # v1.1.12 Sep 11, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/json-iterator/go.git",
)

new_git_repository(
    name = "modern_reflect2",
    build_file = "//:third_party/go/modern_reflect2.BUILD",
    commit = "2b33151c9bbc5231aea69b8861c540102b087070", # v1.0.2 Sep 11, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/modern-go/reflect2.git",
)

new_git_repository(
    name = "modern_concurrent",
    build_file = "//:third_party/go/modern_concurrent.BUILD",
    commit = "bacd9c7ef1dd9b15be4a9909b8ac7a4e313eec94", # v1.0.3 Mar 6, 2018 (LATEST GIT COMMIT)
    remote = "https://github.com/modern-go/concurrent.git",
)

new_git_repository(
    name = "go_logrus",
    build_file = "//:third_party/go/sirupsen_logrus.BUILD",
    commit = "bdc0db8ead3853c56b7cd1ac2ba4e11b47d7da6b", # v1.8.1 Mar 9, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/sirupsen/logrus.git",
)

new_git_repository(
    name = "go_testify",
    build_file = "//:third_party/go/stretchr_testify.BUILD",
    commit = "acba37e5db06f0093b465a7d47822bf13644b66c", # v1.7.0 Jan 13, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/stretchr/testify.git",
)

new_git_repository(
    name = "go_negroni",
    build_file = "//:third_party/go/urfave_negroni.BUILD",
    commit = "c6a59be0ce122566695fbd5e48a77f8f10c8a63a", # v1.0.0 Sep 2, 2018 (LATEST OFFICIAL VERSION (ver 2.0 coming up soon))
    remote = "https://github.com/urfave/negroni.git",
)

new_git_repository(
    name = "go_raven",
    build_file = "//:third_party/go/getsentry_raven.BUILD",
    commit = "5c24d5110e0e198d9ae16f1f3465366085001d92", # Jun 19, 2019 (LATEST GIT COMMIT - ARCHIVED REPO)
    remote = "https://github.com/getsentry/raven-go.git",
)

new_git_repository(
    name = "go_sentry",
    build_file = "//:third_party/go/go_sentry.BUILD",
    commit = "e61b0a40aec5644bec36089566bb6f8b230f0ecf", # v0.12.0 Dec 22, 2021 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/getsentry/sentry-go.git",
)

new_git_repository(
   name = "googleapis_gax",
   build_file = "//:third_party/go/googleapis_gax.BUILD",
   commit = "bd5b16380fd03dc758d11cef74ba2e3bc8b0e8c2", # v2.0.5 Jun 13, 2019 (LATEST GIT COMMIT)
   remote = "https://github.com/googleapis/gax-go.git",
)

new_git_repository(
    name = "go_grpc",
    build_file = "//:third_party/go/google_grpc.BUILD",
    commit = "5c09eff6a2af83b52e8b0e17825eeb4f9cbcc9a4", # v1.33.3 Jan 11, 2021 (UPGRADE NEEDED)
    remote = "https://github.com/grpc/grpc-go.git",
)

new_git_repository(
    name = "go_genproto",
    build_file = "//:third_party/go/google_genproto.BUILD",
    commit = "3ac035c7e7cbd86eb6d8b95be888cf83d73dedd3", # Dec 23, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/googleapis/go-genproto.git"
)

# temp fix, crosses boundary fix for bazel, grpc-gateway modules:
#   * utilities/BUILD.bazel
#   * runtime/BUILD.bazel
#   * internal/BUILD.bazel
# forked (Oct 11, 2020) and deleted the files that prevent compilation
# @todo: find better way to compile these, without forking grpc-gateway
new_git_repository(
    name = "go_grpc_gateway",
    build_file = "//:third_party/go/grpc_gateway.BUILD",
    commit = "f1ff31559317a3119a259ddac78dff609c8e7014", # Forked latest Oct 10, 2020 (v1.15.2 90c395095094cad43c533f891c71de21d7744341) (NOTE: v2 just released, breaking changes in few functions)
    remote = "https://github.com/LandRover/grpc-gateway.git",
)

new_git_repository(
    name = "go_gogo_protobuf",
    build_file = "//:third_party/go/gogo_protobuf.BUILD",
    commit = "b03c65ea87cdc3521ede29f62fe3ce239267c1bc", # v1.3.2 Jan 10, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/gogo/protobuf.git",
)

new_git_repository(
    name = "go_glog",
    build_file = "//:third_party/go/glog.BUILD",
    commit = "9ef845f417d839250ceabbc25c1b26101e772dd7", # Aug 20, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/glog.git",
)

new_git_repository(
    name = "go_intern_strings",
    build_file = "//:third_party/go/go_intern_strings.BUILD",
    commit = "8e6ff32b3e7c0b018c43953085fe2ac330fe9acd", # v1.0.0 Dec 15, 2019 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/josharian/intern.git",
)

new_git_repository(
    name = "go_protobuf",
    build_file = "//:third_party/go/protobuf.BUILD",
    commit = "ae97035608a719c7a1c1c41bed0ae0744bdb0c6f", # v1.5.2 Mar 29, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/golang/protobuf.git",
)

new_git_repository(
    name = "go_protobuf_official",
    build_file = "//:third_party/go/protobuf-official.BUILD",
    commit = "f2d1f6cbe10b90d22296ea09a7217081c2798009", # v1.27.1 Jun 28, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/protocolbuffers/protobuf-go.git",
)

new_git_repository(
    name = "go_certifi",
    build_file = "//:third_party/go/certifi_gocertifi.BUILD",
    commit = "83314bf6d27c99d871fe836cd823f6da424d5149", # 2021.04.29 - Apr 29, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/certifi/gocertifi.git",
)

new_git_repository(
    name = "go_intercom",
    build_file = "//:third_party/go/intercom.BUILD",
    commit = "2bd1af0ce4b2148380ce0f7482c6b81663977b93", # May 04, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/intercom/intercom-go.git"
)

new_git_repository(
    name = "go_querystring",
    build_file = "//:third_party/go/google_querystring.BUILD",
    commit = "1f4a1f9d6e29d314b2513651973fca5c4d4498f1", # v1.1.0 Mar 11, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/google/go-querystring.git",
)

new_git_repository(
    name = "go_cmp",
    build_file = "//:third_party/go/google_cmp.BUILD",
    commit = "d103655696d8ae43c4125ee61454dbf03d8e8324", # v0.5.6 May 25, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/google/go-cmp.git",
)

GO_GOOGLE_API_VERSION="0.48.0" # Jun 07, 2021 (LATEST OFFICIAL RELEASE)
http_archive(
    name = "go_google_api",
    build_file = "//:third_party/go/google_api.BUILD",
    urls = ["https://github.com/googleapis/google-api-go-client/archive/v%s.tar.gz" % GO_GOOGLE_API_VERSION],
    strip_prefix = "google-api-go-client-%s" % GO_GOOGLE_API_VERSION,
)

GO_GOOGLE_CLOUD_VERSION="0.99.0" # Dec 7, 2021 (LATEST OFFICIAL RELEASE)
http_archive(
    name = "go_cloud",
    build_file = "//:third_party/go/google_cloud.BUILD",
    urls = ["https://github.com/GoogleCloudPlatform/google-cloud-go/archive/v%s.tar.gz" % GO_GOOGLE_CLOUD_VERSION],
    strip_prefix = "google-cloud-go-%s" % GO_GOOGLE_CLOUD_VERSION,
)

new_git_repository(
    name = "go_appengine",
    build_file = "//:third_party/go/golang_appengine.BUILD",
    commit = "5d1c1d03f8703c2e81478d9a30e9afa2d3e4bd8a", # v1.6.7 Oct 13, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/golang/appengine.git",
)

new_git_repository(
    name = "go_gorp",
    build_file = "//:third_party/go/gorp.BUILD",
    commit = "3720a47f873542a8f13038aa7c514aaf1a4ec78d", # v3.0.2 Mar 29, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/go-gorp/gorp.git",
)

new_git_repository(
    name = "go_blackfriday",
    build_file = "//:third_party/go/russross_blackfriday.BUILD",
    commit = "4c9bf9512682b995722660a4196c0013228e2049", # v2.1.0 Oct 27, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/russross/blackfriday.git",
)

new_git_repository(
    name = "go_sanitized_anchor_name",
    build_file = "//:third_party/go/shurcool_sanitized_anchor_name.BUILD",
    commit = "7bfe4c7ecddb3666a94b053b422cdd8f5aaa3615", # v1.0.0 Dec 26, 2018 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/shurcool/sanitized_anchor_name.git",
)

new_git_repository(
    name = "go_structs",
    build_file = "//:third_party/go/fatih_structs.BUILD",
    commit = "4966fc68f5b7593aafa6cbbba2d65ec6e1416047", # v1.1.0 Oct 11, 2018 (LATEST OFFICIAL RELEASE - ARCHIVED REPO)
    remote = "https://github.com/fatih/structs.git",
)

new_git_repository(
    name = "go_mysql",
    build_file = "//:third_party/go/mysql.BUILD",
    commit = "bcc459a906419e2890a50fc2c99ea6dd927a88f2", # v1.6.0 Apr 1, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/go-sql-driver/mysql.git",
)

new_git_repository(
    name = "go_x_net",
    build_file = "//:third_party/go/x_net.BUILD",
    commit = "abc453219eb586afb3fc1742e8c685c28b9f7eea", # May 25, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/net.git"
)

new_git_repository(
    name = "go_x_oauth2",
    build_file = "//:third_party/go/x_oauth2.BUILD",
    commit = "5d25da1a8d43b66f2898c444f899c7bcfd6a407e", # Sep 3, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/oauth2.git"
)

new_git_repository(
    name = "go_x_time",
    build_file = "//:third_party/go/x_time.BUILD",
    commit = "f8bda1e9f3badef837c98cbaf4f7c335de90f266", # Feb 20, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/time.git"
)

new_git_repository(
    name = "go_x_crypto",
    build_file = "//:third_party/go/x_crypto.BUILD",
    commit = "c07d793c2f9aacf728fe68cbd7acd73adbd04159", # May 13, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/crypto.git"
)

new_git_repository(
    name = "go_x_text",
    build_file = "//:third_party/go/x_text.BUILD",
    commit = "e328d63cff14134669501e0e154e4f141c784322", # v0.3.6 Mar 30, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/golang/text.git"
)

new_git_repository(
    name = "go_x_sync",
    build_file = "//:third_party/go/x_sync.BUILD",
    commit = "036812b2e83c0ddf193dd5a34e034151da389d09", # Feb 20, 2021 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/sync.git"
)

new_git_repository(
    name = "go_opencensus",
    build_file = "//:third_party/go/go_opencensus.BUILD",
    commit = "3fb168f674736c026e623310bfccb0691e6dec8a", # v0.23.0 Feb 24, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/census-instrumentation/opencensus-go.git"
)

new_git_repository(
    name = "golang_lru",
    build_file = "//:third_party/go/golang_lru.BUILD",
    commit = "14eae340515388ca95aa8e7b86f0de668e981f54", # v0.5.4 Jan 16, 2021 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/hashicorp/golang-lru.git"
)

new_git_repository(
    name = "go_rice",
    build_file = "//:third_party/go/go_rice.BUILD",
    commit = "d954009f7238df62c766980934c8ea7f161d0e59", # Nov 2, 2019 (LATEST GIT COMMIT)
    remote = "https://github.com/GeertJohan/go.rice.git",
)

new_git_repository(
    name = "go_zipexe",
    build_file = "//:third_party/go/go_zipexe.BUILD",
    commit = "74d766ac1dde7458348221869a7d1e7e5fa0597e", # v1.0.1 May 7, 2019 (LATEST GIT COMMIT)
    remote = "https://github.com/daaku/go.zipexe.git",
)

