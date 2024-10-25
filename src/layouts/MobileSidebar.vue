<template>
  <Sheet>
    <SheetTrigger as-child class="flex lg:hidden"
      ><Button variant="outline" size="icon"><Menu /></Button
    ></SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
      <div class="flex flex-col gap-2 lg:w-72 w-full h-full">
        <h1
          class="flex items-center text-2xl font-bold gap-2 text-violet-800 mb-8"
        >
          <img :src="Logo" class="w-16 h-16" />Health Hub
        </h1>
        <SheetClose
          as-child
          v-for="route in routes"
          :key="route.path"
          :variant="checkCurrentUrl(route.path)"
          @click="navigate(route.path)"
        >
          <Button
            class="w-full justify-start transition-colors"
            :variant="checkCurrentUrl(route.path) ? 'default' : 'ghost'"
            @click="navigate(route.path)"
            ><component
              v-if="route.meta"
              :is="route.meta.icon"
              :color="checkCurrentUrl(route.path) ? '#fff' : '#7c3aed'"
              class="w-4 h-4 mr-2"
            />{{ route.name }}</Button
          >
        </SheetClose>

        <Button variant="ghost" class="w-full justify-start"
          ><Pill color="#7c3aed" class="w-4 h-4 mr-2" />Prescriptions</Button
        >
        <Button variant="ghost" class="w-full justify-start"
          ><Asterisk color="#7c3aed" class="w-4 h-4 mr-2" />Referrals</Button
        >
        <Button variant="ghost" class="w-full justify-start"
          ><CalendarPlus2 color="#7c3aed" class="w-4 h-4 mr-2" /><span
            >Appointments</span
          ><Badge class="ml-auto">2</Badge></Button
        >
        <Button variant="ghost" class="w-full justify-start"
          ><MessageCircleHeart
            color="#7c3aed"
            class="w-4 h-4 mr-2"
          />Chat</Button
        >
        <Button variant="ghost" class="w-full justify-start"
          ><Video color="#7c3aed" class="w-4 h-4 mr-2" />Video Calls</Button
        >
        <Button variant="ghost" class="w-full justify-start"
          ><img :src="Ucm" class="w-4 h-4 mr-2 object-cover" />Call a
          Doctor</Button
        >
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mt-auto" />
        <Button color="#7c3aed" variant="ghost" class="w-full justify-start"
          ><CircleHelp color="#7c3aed" class="w-4 h-4 mr-2" />Help</Button
        >
        <Button variant="ghost" class="w-full justify-start" @click="logout"
          ><LogOut color="#7c3aed" class="w-4 h-4 mr-2" />Logout</Button
        >
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Asterisk,
  CalendarPlus2,
  MessageCircleHeart,
  Video,
  CircleHelp,
  LogOut,
  Menu,
} from "lucide-vue-next";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { sidebarRoutes } from "@/router";
import Sheet from "@/components/ui/sheet/Sheet.vue";
import SheetTrigger from "@/components/ui/sheet/SheetTrigger.vue";
import SheetContent from "@/components/ui/sheet/SheetContent.vue";
import SheetHeader from "@/components/ui/sheet/SheetHeader.vue";
import SheetTitle from "@/components/ui/sheet/SheetTitle.vue";
import SheetDescription from "@/components/ui/sheet/SheetDescription.vue";
import SheetClose from "@/components/ui/sheet/SheetClose.vue";
import Logo from "@/assets/icons/logo.png";
import Ucm from "@/assets/icons/ucm.png";

const routes = ref(sidebarRoutes.filter((route) => route.meta?.isPage));
const router = useRouter();
const route = useRoute();

function navigate(url: string) {
  router.push(url);
}

function checkCurrentUrl(url: string) {
  return route.matched.some(({ path }) => path.includes(url));
}

function logout() {
  router.replace("/");
}
</script>

<style scoped></style>
