<template>
    <v-container class=" mt-12 px-5">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">Used furniture</h1>
                <v-chip color="grey" small class="white--text ml-7 mt-1">Aavilable</v-chip>
                </v-row>
                <p class="grey--text">1 40 feet container of used furniture</p>
                </v-flex>
                <v-spacer></v-spacer>
                <h2 >$ 500.0</h2>
                </v-flex>
            </v-card>

            <v-card flat width="1300" class="mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row>
                <v-flex sm12 md9 lg9 xlg9 >
                    <v-card width="" class="pt-6 pb-3 pl-8">
                        <v-flex column>
                        <v-flex row >
                            <v-flex column class="pl-3">
                            <p class=" body-1 mb-2" style="color:#4169E1;"> DESTINATION </p>
                            <p class="body-1">Rwanda</p>
                            </v-flex>
                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> ORIGIN </p>
                            <p class="body-1">Rwanda</p>
                            </v-flex>
                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> CARGO SIZE </p>
                            <p class="body-1">40 feet</p>
                            </v-flex>
                        </v-flex>

                        <v-flex column class="mt-7 pr-4">
                            <p class=" body-1 mb-0" style="color:#4169E1;"> TERMS AND CONDITIIONS </p>
                            <p class="body-1">Lorem ipsum, dolor sit amet consectetur 
                                adipisicing elit. Doloremque, maiores. Sit repellat amet, 
                                odit molestias adipisci, tempora voluptates quod voluptate 
                                exercitationem blanditiis nulla quos delectus, quae ut! Neque, 
                                recusandae perspiciatis!</p>
                        </v-flex>

                        <v-flex row class="mt-10 mb-4" >
                            <v-flex column class="pl-3">
                            <p class=" body-1 mb-2" style="color:#4169E1;"> DESTINATION </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> ORIGIN </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> CARGO SIZE </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>
                        </v-flex>
                        </v-flex>
                    </v-card>
                    
                    <v-card width="1300" class="mt-5 mb-5 pl-8 pt-6 pb-5" >
                        <v-flex>
                            <p class="body-1" style="color:#4169E1;" color="#4169E1">Biding detail</p>
                        </v-flex>
                        <v-flex row class="pl-2 mt-10">
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Bid amount"></v-text-field>
                        </v-flex>
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Delivery time"></v-text-field>
                        </v-flex>
                        <v-flex column class="sm6 md6 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Terms and conditions"></v-text-field>
                        </v-flex>
                        </v-flex>
                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <v-btn  elevation="flat" color="white" class="mx-3" style="color:#4169E1;">cancel</v-btn>
                            <v-btn color="#4169E1" class="white--text">confirm bid</v-btn>
                        </v-flex>
                    </v-card>

                </v-flex>

                <v-flex sm12 md3 lg3 xlg3 class="px-3">
                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3">
                            <p class="white--text body-1 font-weight-bold"> ABC FURNITURE </p>
                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >mail_outline</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text"  >room</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Street location, st</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >local_phone</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>
                            </v-flex>

                        </v-flex>

                    </v-card>

                </v-flex>
                </v-flex>
            </v-card>

            <v-card width="1300" class="mx-auto mb-10 px-5" color="#F5FAFF">

            </v-card>

    </v-container>
</template>