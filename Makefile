#
# Makefile for delve
# Copyright (c) 2014 Cyan, Inc. All rights reserved.
#

-include node_modules/cy-toolkit/files/make/common.mk
-include node_modules/cy-toolkit/files/make/gh-pages.mk
-include node_modules/cy-toolkit/files/make/node-targets.mk

.PHONY: install

install:
	$(HIDE)npm install

test: node-test

coverage: node-coverage

ghp-update: ghp-clean ghp-checkout ghp-copy-common ghp-copy-node ghp-publish
