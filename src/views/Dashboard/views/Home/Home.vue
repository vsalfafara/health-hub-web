<template>
  <div>
    <h1 class="text-2xl font-semibold">Hi John!</h1>
    <p class="text-muted-foreground mb-4">What would you like to do today?</p>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-4">
      <Card class="col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>News</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 class="text-lg mb-2">Breaking</h3>
          <Carousel
            :opts="{ loop: true }"
            :plugins="[Autoplay({ delay: 5000 })]"
            class="relative rounded-md mb-4"
          >
            <CarouselContent>
              <CarouselItem v-ripple class="cursor-pointer">
                <Card class="h-52 w-full overflow-hidden relative select-none">
                  <img
                    :src="Asthma"
                    class="absolute top-0 left-0 h-full w-full object-cover object-center z-0"
                  />
                  <div
                    class="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-slate-900 z-10"
                  ></div>
                  <div
                    class="relative z-10 p-6 flex flex-col justify-between items-start h-full"
                  >
                    <Badge variant="secondary">Asthma</Badge>
                    <div class="flex flex-col">
                      <p class="text-xs text-muted">McKindey • 6 hours ago</p>
                      <h3 class="text-white">What to do with asmtha?</h3>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem v-ripple class="cursor-pointer">
                <Card class="h-52 w-full overflow-hidden relative select-none">
                  <img
                    :src="HeartAttack"
                    class="absolute top-0 left-0 h-full w-full object-cover object-center z-0"
                  />
                  <div
                    class="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-slate-900 z-10"
                  ></div>
                  <div
                    class="relative z-10 p-6 flex flex-col justify-between items-start h-full"
                  >
                    <Badge variant="destructive">Alert</Badge>
                    <div class="flex flex-col">
                      <p class="text-xs text-muted">McKindey • 6 hours ago</p>
                      <h3 class="text-white">
                        The heart: All you need to know
                      </h3>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg">Recommendation</h3>
            <Button variant="ghost">View all</Button>
          </div>
          <div class="flex flex-col gap-4">
            <div
              v-ripple
              class="flex gap-2 hover:bg-slate-100 p-2 rounded-lg cursor-pointer"
            >
              <img
                :src="Asthma"
                class="h-20 w-20 object-cover object-center rounded-md"
              />
              <div class="flex flex-col gap-1 justify-between flex-1">
                <div>
                  <p class="text-sm text-muted-foreground">Asthma</p>
                  <h3 class="font-semibold">What to do with asmtha?</h3>
                </div>
                <div class="flex gap-1 items-center">
                  <Avatar class="h-6 w-6">
                    <AvatarImage
                      src="https://github.com/radix-vue.png"
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p class="text-muted-foreground text-sm">
                    McKindey • Feb 27, 2024
                  </p>
                </div>
              </div>
            </div>
            <div
              v-ripple
              class="flex gap-2 hover:bg-slate-100 p-2 rounded-lg cursor-pointer"
            >
              <img
                :src="HeartAttack"
                class="h-20 w-20 object-cover object-center rounded-md"
              />
              <div class="flex flex-col gap-1 justify-between flex-1">
                <div>
                  <p class="text-sm text-muted-foreground">Alert</p>
                  <h3 class="font-semibold">The heart: All you need to know</h3>
                </div>
                <div class="flex gap-1 items-center">
                  <Avatar class="h-6 w-6">
                    <AvatarImage
                      src="https://github.com/radix-vue.png"
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p class="text-muted-foreground text-sm">
                    McKindey • Feb 27, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card class="col-span-2 lg:col-span-1">
        <CardHeader><CardTitle>Videos</CardTitle></CardHeader>
        <CardContent>
          <media-player
            title="Covid XEC: What are the symptoms of new virus strain?"
            src="https://www.youtube.com/watch?v=8i5lJrXcq6E"
          >
            <media-provider></media-provider>
            <media-video-layout></media-video-layout>
          </media-player>
        </CardContent>
      </Card>
    </div>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      <Card
        class="flex flex-col gap-4 col-span-4 md:col-span-2 lg:col-span-1 p-6"
      >
        <div
          class="rounded-sm bg-violet-800 h-32 w-full p-4 flex justify-center items-center"
        >
          <img :src="UCM" alt="" />
        </div>
        <p>
          UCM Digital Telehealth offers you 24/7 access to medical care from
          your phone, tablet, or computer at no additional cost
        </p>
        <div class="grid gap-2 grid-cols-2 mt-auto">
          <Button><MessageCircle class="mr-2" />Chat with a doctor</Button>
          <Button><Phone class="mr-2" />Call a doctor</Button>
        </div>
      </Card>
      <Card
        class="flex flex-col gap-4 col-span-4 md:col-span-2 lg:col-span-1 p-6"
      >
        <div
          class="rounded-sm bg-green-400 h-32 w-full p-4 flex justify-center items-center"
        >
          <img :src="Anura" alt="" />
        </div>
        <p>
          Anura's intended use is to increase people's awareness of their
          general wellness.
        </p>
        <div class="grid mt-auto">
          <Button variant="anura"
            ><Camera class="mr-2" />Chat with a doctor</Button
          >
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Camera } from "lucide-vue-next";
import Asthma from "@/assets/dashboard/asthma.jpg";
import HeartAttack from "@/assets/dashboard/heartattack.jpg";
import UCM from "@/assets/dashboard/ucm-logo-wht.svg";
import Anura from "@/assets/dashboard/anura-logo.png";
import Carousel from "@/components/ui/carousel/Carousel.vue";
import CarouselContent from "@/components/ui/carousel/CarouselContent.vue";
import CarouselItem from "@/components/ui/carousel/CarouselItem.vue";
import Avatar from "@/components/ui/avatar/Avatar.vue";
import AvatarImage from "@/components/ui/avatar/AvatarImage.vue";
import AvatarFallback from "@/components/ui/avatar/AvatarFallback.vue";
import Autoplay from "embla-carousel-autoplay";
import "vidstack/bundle";
</script>

<style scoped></style>
