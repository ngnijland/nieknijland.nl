# Niek Nijland portfolio

This site is build with
* [Gatsby](https://www.gatsbyjs.org/)
* [SanityIO](https://www.sanity.io/)

## Start developing

Using Kubernetes + [Devspace](https://devspace.sh)

1. Either use a remote or local Kubernetes cluster. For example using [minikube](https://minikube.sigs.k8s.io), [kind](https://kind.sigs.k8s.io) or [Rancher Desktop](https://rancherdesktop.io).

1. [Install devspace](https://devspace.sh/cli/docs/getting-started/installation).

1. Run `devspace dev`.

---

Using plain Node.js

1. Install dependencies

```shell
$ yarn
$ yarn bootstrap
```

2. Add environment variables

Copy `.env.example` file and rename to `.env.development`. Then fill in the environment variables.

3. Run development server

```shell
$ yarn start
```

4. Site is now running at `http://localhost:8000` and the cms is running at `http://localhost:3333`
