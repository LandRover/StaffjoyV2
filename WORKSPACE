load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_file")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository", "new_git_repository")

## Load docker rules
IO_RULES_DOCKER_VERSION="0.16.0"
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
    commit = "a54d6839d954633947ca08f00020d7eac2bf27cd", ## Jan 16, 2019 (LATEST GIT COMMIT)
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
    build_file = "//:third_party/go/dgrijalva_jwt.BUILD",
    commit = "06ea1031745cb8b3dab3f6a236daf2b0aa468b7e", # v3.2.0 Mar 9, 2018 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/dgrijalva/jwt-go.git",
)

new_git_repository(
    name = "go_gorilla_sessions",
    build_file = "//:third_party/go/gorilla_sessions.BUILD",
    commit = "61fa50d034f99479a7de0d1c02c5e9dea5ad30cb", # v1.2.1 Aug 19, 2020 (LATEST GIT COMMIT)
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
    commit = "79c60d0e4fcf1fbc9653c1cb13d28e82248cf43c", # v1.7.0 Apr 26, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/gorilla/csrf.git",
)

new_git_repository(
    name = "go_gorilla_mux",
    build_file = "//:third_party/go/gorilla_mux.BUILD",
    commit = "98cb6bf42e086f6af920b965c38cacc07402d51b", # v1.8.0 Jul 11, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/gorilla/mux.git",
)

new_git_repository(
    name = "go_pkg_errors",
    build_file = "//:third_party/go/pkg_errors.BUILD",
    commit = "614d223910a179a466c1767a985424175c39b465", # Jan 14, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/pkg/errors.git",
)

new_git_repository(
    name = "go_mailgun",
    build_file = "//:third_party/go/go_mailgun.BUILD",
    commit = "4549b26cb022921a04c55f8793e60b420587746d", # v4.3.0 Jun 24, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/mailgun/mailgun-go.git",
)

new_git_repository(
    name = "jsoniter",
    build_file = "//:third_party/go/jsoniter.BUILD",
    commit = "a1ca0830781e007c66b225121d2cdb3a649421f6", # v1.1.10 Jun 8, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/json-iterator/go.git",
)

new_git_repository(
    name = "modern_reflect2",
    build_file = "//:third_party/go/modern_reflect2.BUILD",
    commit = "94122c33edd36123c84d5368cfb2b69df93a0ec8", # v1.0.1 Jul 18, 2018 (LATEST GIT COMMIT)
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
    commit = "6699a89a232f3db797f2e280639854bbc4b89725", # v1.7.0 May 28, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/sirupsen/logrus.git",
)

new_git_repository(
    name = "go_testify",
    build_file = "//:third_party/go/stretchr_testify.BUILD",
    commit = "f654a9112bbeac49ca2cd45bfbe11533c4666cf8", # v1.6.1 Jun 5, 2020 (LATEST OFFICIAL VERSION)
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
    commit = "03065b82f3c16828b703f1f3e6cfe8bf9cb94589", # v0.9.0 Dec 7, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/getsentry/sentry-go.git",
)

new_git_repository(
   name = "googleapis_gax",
   build_file = "//:third_party/go/googleapis_gax.BUILD",
   commit = "1da42d02221b8e43600eb01ae142305ef3e97d86", # Sep 21, 2020 (LATEST GIT COMMIT)
   remote = "https://github.com/googleapis/gax-go.git",
)

new_git_repository(
    name = "go_grpc",
    build_file = "//:third_party/go/google_grpc.BUILD",
    commit = "56d63285d528c0d33f9bf8c355139d91edc047de", # v1.33.2 Nov 06, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/grpc/grpc-go.git",
)

new_git_repository(
    name = "go_genproto",
    build_file = "//:third_party/go/google_genproto.BUILD",
    commit = "e3217bee35cc05224a14d950c85cb05b61109ded", # Dec 10, 2020 (LATEST GIT COMMIT)
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
    commit = "5628607bb4c51c3157aacc3a50f0ab707582b805", # v1.3.1 Oct 14, 2019 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/gogo/protobuf.git",
)

new_git_repository(
    name = "go_glog",
    build_file = "//:third_party/go/glog.BUILD",
    commit = "23def4e6c14b4da8ac2ed8007337bc5eb5007998", # Jan 27, 2016 (LATEST GIT COMMIT)
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
    commit = "4846b58453b3708320bdb524f25cc5a1d9cda4d4", # v1.4.3 Oct 15, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/golang/protobuf.git",
)

new_git_repository(
    name = "go_protobuf_official",
    build_file = "//:third_party/go/protobuf-official.BUILD",
    commit = "3f7a61f89bb6813f89d981d1870ed68da0b3c3f1", # v1.25.0 Jun 24, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/protocolbuffers/protobuf-go.git",
)

new_git_repository(
    name = "go_certifi",
    build_file = "//:third_party/go/certifi_gocertifi.BUILD",
    commit = "deb3ae2ef2610fde3330947281941c562861188b", # 2020.02.11 - Feb 11, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/certifi/gocertifi.git",
)

new_git_repository(
    name = "go_intercom",
    build_file = "//:third_party/go/intercom.BUILD",
    commit = "6ffc0627261af5a8ccfa6c107fe2ff39e3e2ed6b", # Feb 17, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/intercom/intercom-go.git"
)

new_git_repository(
    name = "go_querystring",
    build_file = "//:third_party/go/google_querystring.BUILD",
    commit = "c8c88dbee036db4e4808d1f2ec8c2e15e11c3f80", # Mar 18, 2019 (LATEST GIT COMMIT)
    remote = "https://github.com/google/go-querystring.git",
)

new_git_repository(
    name = "go_cmp",
    build_file = "//:third_party/go/google_cmp.BUILD",
    commit = "d2fcc899bdc2d134b7c00e36137260db963e193c", # v0.5.2 Aug 18, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/google/go-cmp.git",
)

GO_GOOGLE_API_VERSION="0.41.0" # Mar 09, 2021 (LATEST OFFICIAL RELEASE)
http_archive(
    name = "go_google_api",
    build_file = "//:third_party/go/google_api.BUILD",
    urls = ["https://github.com/googleapis/google-api-go-client/archive/v%s.tar.gz" % GO_GOOGLE_API_VERSION],
    strip_prefix = "google-api-go-client-%s" % GO_GOOGLE_API_VERSION,
)

GO_GOOGLE_CLOUD_VERSION="0.79.0" # Mar 10, 2020 (LATEST OFFICIAL RELEASE)
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
    commit = "46351a8892976898935f653f5333782579a96fa5", # Aug 18, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/go-sql-driver/mysql.git",
)

new_git_repository(
    name = "go_x_net",
    build_file = "//:third_party/go/x_net.BUILD",
    commit = "ac852fbbde11df194bfd5004603c7c8e117901f2", # Dec 09, 2020 (LATEST GIT COMMIT)
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
    commit = "7e3f01d253248a0a5694eb5b7376dfea18b6397e", # Dec 8, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/time.git"
)

new_git_repository(
    name = "go_x_crypto",
    build_file = "//:third_party/go/x_crypto.BUILD",
    commit = "5f87f3452ae96c4850ab9af7783f2517b643061b", # Dec 8, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/crypto.git"
)

new_git_repository(
    name = "go_x_text",
    build_file = "//:third_party/go/x_text.BUILD",
    commit = "22f1617af38ed4cd65b3b96e02bab267e560155c", # v0.3.4 Oct 27, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/golang/text.git"
)

new_git_repository(
    name = "go_x_sync",
    build_file = "//:third_party/go/x_sync.BUILD",
    commit = "67f06af15bc961c363a7260195bcd53487529a21", # Oct 20, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/sync.git"
)

new_git_repository(
    name = "go_opencensus",
    build_file = "//:third_party/go/go_opencensus.BUILD",
    commit = "3fb168f674736c026e623310bfccb0691e6dec8a", # v0.22.5 Oct 7, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/census-instrumentation/opencensus-go.git"
)

new_git_repository(
    name = "golang_lru",
    build_file = "//:third_party/go/golang_lru.BUILD",
    commit = "eb529947af531eb529020ba979a7a887338904d1", # May 11, 2020 (LATEST GIT COMMIT)
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

