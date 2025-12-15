# [Frontend Vite Template](https://github.com/europanite/frontend_vite_template "Frontend Vite Template")

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![OS](https://img.shields.io/badge/OS-Linux%20%7C%20macOS%20%7C%20Windows-blue)
[![CI](https://github.com/europanite/frontend_vite_template/actions/workflows/ci.yml/badge.svg)](https://github.com/europanite/frontend_vite_template/actions/workflows/ci.yml)
[![docker](https://github.com/europanite/frontend_vite_template/actions/workflows/docker.yml/badge.svg)](https://github.com/europanite/frontend_vite_template/actions/workflows/docker.yml)
[![pages](https://github.com/europanite/frontend_vite_template/actions/workflows/pages.yml/badge.svg)](https://github.com/europanite/frontend_vite_template/actions/workflows/pages.yml)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

!["web_ui"](./assets/images/web_ui.png)

A Client Side Vite Template.

[PlayGround](https://europanite.github.io/frontend_vite_template/)

---

## 🚀 Getting Started

### 1. Prerequisites
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Build and start all services:

```bash

# Build the image
docker compose build

# Run the container
docker compose up

```

### 3. Test:
```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

# License
- Apache License 2.0