<template>
  <div class="w-full min-h-screen lg:grid lg:grid-cols-2">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form @submit.prevent="login">
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a
                  href="/forgot-password"
                  class="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" class="w-full"> Login </Button>
            <Separator class="my-2" label="Or" />
            <Button type="button" variant="outline" class="w-full">
              <img :src="Google" class="h-6 w-6 mr-2" />Login with Google
            </Button>
            <Button type="button" variant="outline" class="w-full">
              <img :src="Microsoft" class="h-6 w-6 mr-2" />Login with Microsoft
            </Button>
            <Button type="button" variant="outline" class="w-full">
              <img :src="Sso" class="h-6 w-6 mr-2" />Login via SSO
            </Button>
          </div>
        </form>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline"> Sign up </a>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
      <img
        src="/assets/login/login-bg.jpg"
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "vue-router";
import Google from "@/assets/icons/google/48.svg";
import Microsoft from "@/assets/icons/microsoft/48.svg";
import Sso from "@/assets/icons/sso/50.svg";

const router = useRouter();

function login() {
  router.replace("/dashboard");
}
</script>
