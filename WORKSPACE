load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_file")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository", "new_git_repository")

## Load docker rules
IO_RULES_DOCKER_VERSION="0.14.3"
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
    commit = "15ff3511704639ab26f7843f780c015f4bf49565", # After v1.2.0 Jan 5, 2020 (LATEST GIT COMMIT)
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
    commit = "75dcda0896e109a2a22c9315bca3bb21b87b2ba5", # v1.7.4 Feb 12, 2020 (LATEST OFFICIAL VERSION)
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
    commit = "1b82de88318b8185707ea659ef6007d980d30b4f", # v4.1.3 Jun 24, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/mailgun/mailgun-go.git",
)

new_git_repository(
    name = "easyjson",
    build_file = "//:third_party/go/easyjson.BUILD",
    commit = "8ba3c7bdceed0f2e8089b8bac6627e18a1392659", # May 24, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/mailru/easyjson.git",
)

new_git_repository(
    name = "go_logrus",
    build_file = "//:third_party/go/sirupsen_logrus.BUILD",
    commit = "60c74ad9be0d874af0ab0daef6ab07c5c5911f0d", # v1.6.0 May 2, 2020 (LATEST OFFICIAL VERSION)
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
    commit = "4104e33144033fec8e24add945c8d1b0e943d323", # v0.6.1 May 11, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/getsentry/sentry-go.git",
)

new_git_repository(
   name = "googleapis_gax",
   build_file = "//:third_party/go/googleapis_gax.BUILD",
   commit = "be11bb253a768098254dc71e95d1a81ced778de3", # Mar 25, 2020 (LATEST GIT COMMIT)
   remote = "https://github.com/googleapis/gax-go.git",
)

new_git_repository(
    name = "go_grpc",
    build_file = "//:third_party/go/google_grpc.BUILD",
    commit = "1f47ba4663831f2a9c28a62a7de3ff8bc45078f0", # v1.30.0 Jun 22, 2020 (LATEST OFFICIAL VERSION)
    remote = "https://github.com/grpc/grpc-go.git",
)

new_git_repository(
    name = "go_genproto",
    build_file = "//:third_party/go/google_genproto.BUILD",
    commit = "ee7919e894b5b5992a06d6e11a361f08b63b49ef", # Jun 26, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/googleapis/go-genproto.git"
)

# temp fix, crosses boundary fix for bazel, grpc-gateway modules:
#   * utilities/BUILD.bazel
#   * runtime/BUILD.bazel
#   * internal/BUILD.bazel
# forked (31/05/2020) and deleted the files that prevent compilation
# @todo: find better way to compile these, without forking grpc-gateway
new_git_repository(
    name = "go_grpc_gateway",
    build_file = "//:third_party/go/grpc_gateway.BUILD",
    commit = "a89ee9d0f81220c542898f7077334d1fe2cc85fc", # Forked latest 07/06/2020 (v1.14.6 4c1f33f9458882be5fc1a274b109d75143f5d4a3)
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
    commit = "d04d7b157bb510b1e0c10132224b616ac0e26b17", # v1.4.2 May 14, 2020 (LATEST OFFICIAL RELEASE)
    remote = "https://github.com/golang/protobuf.git",
)

new_git_repository(
    name = "go_protobuf_official",
    build_file = "//:third_party/go/protobuf-official.BUILD",
    commit = "3f7a61f89bb6813f89d981d1870ed68da0b3c3f1", # v1.25.0 Jun 22, 2020 (LATEST OFFICIAL RELEASE)
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
    commit = "4a83f562775624b78b8b83b7492758099439ca10", # May 26, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/google/go-cmp.git",
)

GO_GOOGLE_API_VERSION="0.28.0" # Jun 18, 2020 (LATEST OFFICIAL RELEASE)
http_archive(
    name = "go_google_api",
    build_file = "//:third_party/go/google_api.BUILD",
    urls = ["https://github.com/googleapis/google-api-go-client/archive/v%s.tar.gz" % GO_GOOGLE_API_VERSION],
    strip_prefix = "google-api-go-client-%s" % GO_GOOGLE_API_VERSION,
)

GO_GOOGLE_CLOUD_VERSION="0.60.0" # Jun 29, 2020 (LATEST OFFICIAL RELEASE)
http_archive(
    name = "go_cloud",
    build_file = "//:third_party/go/google_cloud.BUILD",
    urls = ["https://github.com/GoogleCloudPlatform/google-cloud-go/archive/v%s.tar.gz" % GO_GOOGLE_CLOUD_VERSION],
    strip_prefix = "google-cloud-go-%s" % GO_GOOGLE_CLOUD_VERSION,
)

new_git_repository(
    name = "go_appengine",
    build_file = "//:third_party/go/golang_appengine.BUILD",
    commit = "553959209a20f3be281c16dd5be5c740a893978f", # v1.6.6 Apr 22, 2020 (LATEST OFFICIAL RELEASE)
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
    commit = "d3b5b032dc8e8927d31a5071b56e14c89f045135", # v2.0.1 Spt 20, 2018 (LATEST OFFICIAL RELEASE)
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
    commit = "12508c83901b1a418e3dea51850f956f32506f4e", # May 31, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/go-sql-driver/mysql.git",
)

new_git_repository(
    name = "go_x_net",
    build_file = "//:third_party/go/x_net.BUILD",
    commit = "627f9648deb96c27737b83199d44bb5c1010cbcf", # Jun 2, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/net.git"
)

new_git_repository(
    name = "go_x_oauth2",
    build_file = "//:third_party/go/x_oauth2.BUILD",
    commit = "bf48bf16ab8d622ce64ec6ce98d2c98f916b6303", # Jan 7, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/oauth2.git"
)

new_git_repository(
    name = "go_x_time",
    build_file = "//:third_party/go/x_time.BUILD",
    commit = "89c76fbcd5d1cd4969e5d2fe19d48b19d5ad94a0", # Apr 16, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/time.git"
)

new_git_repository(
    name = "go_x_crypto",
    build_file = "//:third_party/go/x_crypto.BUILD",
    commit = "70a84ac30bf957c7df57edd1935d2081871515e1", # May 21, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/crypto.git"
)

new_git_repository(
    name = "go_x_text",
    build_file = "//:third_party/go/x_text.BUILD",
    commit = "23ae387dee1f90d29a23c0e87ee0b46038fbed0e", # Jun 11, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/text.git"
)

new_git_repository(
    name = "go_x_sync",
    build_file = "//:third_party/go/x_sync.BUILD",
    commit = "43a5402ce75a95522677f77c619865d66b8c57ab", # Mar 17, 2020 (LATEST GIT COMMIT)
    remote = "https://github.com/golang/sync.git"
)

new_git_repository(
    name = "go_opencensus",
    build_file = "//:third_party/go/go_opencensus.BUILD",
    commit = "5fa069b99bc903d713add0295c7e0a55d34ae573", # v0.22.4 Jun 17, 2020 (LATEST OFFICIAL RELEASE)
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

