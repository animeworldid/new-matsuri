# [Choice] Debian version (use bullseye on local arm64/Apple Silicon): bullseye, buster
ARG VARIANT=bullseye
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

# ** [Optional] Uncomment this section to install additional packages. **
RUN curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir /usr/local/bin --skip-shell \
&& chmod +x /usr/local/bin/fnm \
&& echo 'eval "$(fnm env --use-on-cd)"' | tee -a /home/vscode/.bashrc /home/vscode/.zshrc

COPY gitconfig /home/vscode/.gitconfig