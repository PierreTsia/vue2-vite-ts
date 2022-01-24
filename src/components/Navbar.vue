<template>
  <header>
    <template>
      <v-card class="overflow-hidden">
        <v-app-bar color="secondary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-tabs align-with-title>
            <v-tab><router-link to="/">Home</router-link></v-tab>
            <v-tab><router-link to="/about">About</router-link></v-tab>
            <v-tab><router-link to="/todo">Todos</router-link></v-tab>
          </v-tabs>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
      </v-card>
    </template>
  </header>
</template>
