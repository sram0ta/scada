<script setup>
import router from '@/routes.js';
import Header from "@/components/additional/Header.vue";
import SideMenu from "@/components/additional/SideMenu.vue";
</script>

<template>
  <Header/>
  <div class="content">
    <SideMenu/>
    <div class="wrapper-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  padding: 0;
}

main {
  display: block;
}


h1 {
  font-size: 2em;
  margin: 0;
}


hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  width: 100%;
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  display: block;
  line-height: 1;
  background-color: transparent;
  text-decoration: none;
}


abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: 600;
}


code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

img {
  border-style: none;
  height: auto;
}

button,
input,
optgroup,
select,
textarea {
  box-sizing: border-box;
  font-family: inherit;
  font-size: 100%;
  line-height: 1;
  margin: 0;
  background: transparent;
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select {
  cursor: pointer;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}
[hidden] {
  display: none;
}
header{
  box-sizing: border-box;
}
:focus-visible {
  outline: -webkit-focus-ring-color auto 0;
}
div{
  box-sizing: border-box;
}
.content{
  display: flex;
}
.wrapper-content{
  padding: 50px 0 0 50px;
  display: flex;
  gap: 50px;
}
html, body, #app, .content{
  height: 100%;
}
html, body{
  overflow: hidden;
}
</style>
