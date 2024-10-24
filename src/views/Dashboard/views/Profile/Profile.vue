<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div class="flex flex-col gap-4 col-span-2 lg:col-auto">
      <Card class="p-6">
        <div class="flex gap-4 items-center mb-4">
          <img
            :src="ProfileImage"
            class="rounded-full h-20 w-20 object-cover"
          />
          <h1 class="text-2xl font-semibold">John Doe</h1>
          <div class="flex justify-end items-start flex-1">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem class="cursor-pointer"
                  >Change Profile Picture</DropdownMenuItem
                >
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-semibold">Contact Details</h1>
          <div class="flex gap-2 items-center">
            <PhoneCall color="#7c3aed" class="h-4 w-4" />
            <span>02586-59828</span>
          </div>
          <div class="flex gap-2 items-center">
            <Mail color="#7c3aed" class="h-4 w-4" />
            <span>john@example.com</span>
          </div>
          <div class="flex gap-2 items-center">
            <House color="#7c3aed" class="h-4 w-4" />
            <span>15 Trevelyan Avenue, London, SW12 J23</span>
          </div>
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle> Lab Results </CardTitle>
        </CardHeader>
        <CardContent>
          <Table class="mb-2">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead class="text-right"> File Size </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-medium">
                  <div class="flex gap-2 items-center">
                    <span>MRI Scan</span>
                  </div>
                </TableCell>
                <TableCell>Sept 20, 2024</TableCell>
                <TableCell class="text-right"> 2.5MB </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-medium">
                  <div class="flex gap-2 items-center">
                    <span>Basic Enzyme Test</span>
                  </div>
                </TableCell>
                <TableCell>Oct 4, 2024</TableCell>
                <TableCell class="text-right"> 6MB </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div class="flex justify-between">
            <Button variant="outline">Upload</Button>
            <Button variant="ghost">View All</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    <div class="flex flex-col gap-4 col-span-2">
      <Card>
        <CardHeader> <CardTitle> Overview </CardTitle> </CardHeader
        ><CardContent>
          <div
            class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          >
            <div>
              <p class="text-muted-foreground font-semibold text-xs">Gender:</p>
              <h1 class="text-lg font-semibold">Male</h1>
            </div>
            <div>
              <p class="text-muted-foreground font-semibold text-xs">
                Date of Birth:
              </p>
              <h1 class="text-lg font-semibold">05/04/1985</h1>
            </div>
            <div>
              <p class="text-muted-foreground font-semibold text-xs">
                Occupation:
              </p>
              <h1 class="text-lg font-semibold">Field Engineer</h1>
            </div>
            <div>
              <p class="text-muted-foreground font-semibold text-xs">Status:</p>
              <h1 class="text-lg font-semibold">Married</h1>
            </div>
            <div>
              <p class="text-muted-foreground font-semibold text-xs">
                Previous Visit:
              </p>
              <h1 class="text-lg font-semibold">08/25/2024</h1>
            </div>
            <div>
              <p class="text-muted-foreground font-semibold text-xs">
                Next Visit:
              </p>
              <h1 class="text-lg font-semibold">10/25/2024</h1>
            </div>
            <div>
              <p class="text-muted-foreground font-semibold text-xs">
                Blood Type
              </p>
              <h1 class="text-lg font-semibold">B-</h1>
            </div>
            <div>
              <p class="text-muted-foreground font-semibold text-xs">
                Allergies
              </p>
              <h1 class="text-lg font-semibold">Nuts, Pollen</h1>
            </div>
          </div>
        </CardContent>
      </Card>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Button variant="outline" class="flex justify-between py-10">
          <div class="flex gap-2 items-center text-sm">
            <Calendar
              color="#7c3aed"
              class="bg-purple-200 p-2 h-10 w-10 rounded-full"
            />
            Appointments
          </div>
          <ChevronRight />
        </Button>
        <Button variant="outline" class="flex justify-between py-10">
          <div class="flex gap-2 items-center text-sm">
            <Contact
              color="#7c3aed"
              class="bg-purple-200 p-2 h-10 w-10 rounded-full"
            />
            Doctors
          </div>
          <ChevronRight />
        </Button>
        <Button variant="outline" class="flex justify-between py-10">
          <div class="flex gap-2 items-center text-sm">
            <BriefcaseMedical
              color="#7c3aed"
              class="bg-purple-200 p-2 h-10 w-10 rounded-full"
            />
            Treatment
          </div>
          <ChevronRight />
        </Button>
        <Button variant="outline" class="flex justify-between py-10">
          <div class="flex gap-2 items-center text-sm">
            <FlaskConical
              color="#7c3aed"
              class="bg-purple-200 p-2 h-10 w-10 rounded-full"
            />
            Test & Results
          </div>
          <ChevronRight />
        </Button>
        <Button variant="outline" class="flex justify-between py-10">
          <div class="flex gap-2 items-center text-sm">
            <Heart
              color="#7c3aed"
              class="bg-purple-200 p-2 h-10 w-10 rounded-full"
            />
            Vital Signs
          </div>
          <ChevronRight />
        </Button>
        <Button variant="outline" class="flex justify-between py-10">
          <div class="flex gap-2 items-center text-sm">
            <CreditCard
              color="#7c3aed"
              class="bg-purple-200 p-2 h-10 w-10 rounded-full"
            />
            Billing
          </div>
          <ChevronRight />
        </Button>
        <Button variant="outline" class="flex justify-between py-10">
          <div class="flex gap-2 items-center text-sm">
            <FileText
              color="#7c3aed"
              class="bg-purple-200 p-2 h-10 w-10 rounded-full"
            />
            Consent Forms
          </div>
          <ChevronRight />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileImage from "@/assets/profile/profile.jpg";
import Button from "@/components/ui/button/Button.vue";
import Card from "@/components/ui/card/Card.vue";
import CardContent from "@/components/ui/card/CardContent.vue";
import CardHeader from "@/components/ui/card/CardHeader.vue";
import CardTitle from "@/components/ui/card/CardTitle.vue";
import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem.vue";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger.vue";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Ellipsis,
  PhoneCall,
  Mail,
  House,
  Calendar,
  Contact,
  BriefcaseMedical,
  FlaskConical,
  Heart,
  CreditCard,
  FileText,
  ChevronRight,
} from "lucide-vue-next";
</script>
<style scoped></style>
