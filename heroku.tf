provider "heroku" {
  version = "~> 2.0"
}

provider "github" {
  individual = "true"
  anonymous = "true"
}

data "github_release" "release" {
    repository  = "holdermind-backend"
    owner       = "mombachm"
    retrieve_by = "latest"
}

resource "heroku_app" "holdermind-backend" {
  name   = "holdermind-backend"
  region = "us"
}

resource "heroku_build" "holdermind-backend" {
  app = heroku_app.holdermind-backend.id

  buildpacks = [
    "https://github.com/heroku/heroku-buildpack-nodejs.git",
    "https://github.com/zidizei/heroku-buildpack-tsc#v2.0"
  ]

  source = {
    url = data.github_release.release.tarball_url
    version = data.github_release.release.name
  }
}

