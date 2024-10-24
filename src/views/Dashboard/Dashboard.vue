<template>
  <div class="flex h-screen w-full overflow-hidden">
    <Sidebar class="hidden lg:flex" />
    <div class="flex w-full flex-col bg-slate-50">
      <header class="flex h-16 py-6 items-center gap-4 px-4 md:px-6">
        <div
          class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
        >
          <MobileSidebar class="block lg:hidden" />

          <form class="ml-auto flex-1 sm:flex-initial">
            <div class="relative">
              <Search
                class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search..."
                class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="secondary" size="icon" class="rounded-full">
                <Avatar>
                  <AvatarImage :src="ProfileImage" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main class="p-4 md:p-8 relative overflow-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/layouts/Sidebar.vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import MobileSidebar from "@/layouts/MobileSidebar.vue";
import Avatar from "@/components/ui/avatar/Avatar.vue";
import ProfileImage from "@/assets/profile/profile.jpg";
import AvatarImage from "@/components/ui/avatar/AvatarImage.vue";
import AvatarFallback from "@/components/ui/avatar/AvatarFallback.vue";
</script>
