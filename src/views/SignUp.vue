<template>
<div class="flex flex-col md:flex-row h-screen">
    <div class="bg-primary flex-1 flex items-center justify-center ">
        <div class="text-center text-white p-6">
            <h2 class="text-3xl font-bold mb-4">Welcome</h2>
            <p class="text-lg">Join our community today!</p>
        </div>
    </div>
    <div class="flex-1 flex items-center justify-center px-4 py-8 md:px-0">
        <div class="w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center ">Sign Up</h2>
            <form @submit.prevent="handleSignUp" class="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="first-name">
                        First Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="Enter your first name" v-model="formData.firstName" required />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="last-name">
                        Last Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Enter your last name" v-model="formData.lastName" required />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="mobile">
                        Mobile Number
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Enter your mobile number" v-model="formData.mobile" required />
                    <p v-if="mobileError" class="text-red-500 text-sm">Please check your number</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                        Email Address
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" v-model="formData.email" required />
                </div>
                <div class="mb-4 relative">
                    <label class="block text-gray-700 font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10" :type="showPassword ? 'text' : 'password'" id="password" placeholder="Enter your password" v-model="formData.password" :class="{ 'border-red-500': passwordError }" required />
                    <button type="button" class="absolute bg-primary inset-y-0 h-3 w-3 right-0  text-gray-500 mt-11 mr-4 rounded hover:text-gray-700 focus:outline-none" @click="togglePasswordVisibility">
                        <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </button>
                    <p v-if="passwordError" class="text-red-500 text-sm">Password must contain at least one letter and one number.</p>
                </div>
                <div class="mb-4 relative">
                    <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                        Confirm Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10" :type="showConfirmPassword ? 'text' : 'password'" id="confirm-password" placeholder="Confirm your password" v-model="formData.confirmPassword" :class="{ 'border-red-500': passwordMismatch }" required />
                    <button type="button" class="absolute bg-primary inset-y-0 h-3 w-3 right-0 mt-11 mr-4 rounded text-gray-500 hover:text-gray-700 focus:outline-none" @click="toggleConfirmPasswordVisibility">
                        <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </button>
                    <p v-if="passwordMismatch" class="text-red-500 text-sm">Passwords do not match.</p>
                    <p v-if="passwordLength" class="text-red-500 text-sm">Passwords must have 8 charector.</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="dob">
                        Date of Birth
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" v-model="formData.dob" required />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="gender">
                        Gender
                    </label>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" v-model="formData.gender" required>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="flex items-center justify-between">
                    <p v-if="EmailIsThere" class="text-red-500 text-sm">Passwords do not match.</p>
                    <button class="bg-primary hover:bg-primary2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    import {
        userRegister
    } from '@/API/index.js'

    export default {
        name:"SignUp",
        data() {
            return {
                formData: {
                    firstName: '',
                    lastName: '',
                    mobile: '',
                    email: '',
                    password: '',
                    dob: '',
                    gender: '',
                },
                passwordError: false,
                passwordMismatch: false,
                mobileError: false,
                emailisThere: false,
            };
        },
        methods: {
            async handleSignUp() {
                this.validatePassword();
                this.validateMobile();

                if (!this.passwordError && !this.passwordMismatch && !this.mobileError && !this.passwordLength) {
                    await this.userReg()
                    console.log(this.formData);
                }
            },

            async userReg() {
                let user = {
                    "first_name": this.formData.firstName,
                    "last_name": this.formData.lastName,
                    "email": this.formData.email,
                    "mobile": this.formData.mobile,
                    "password": this.formData.password,
                    "gender": this.formData.gender,
                    "dob": this.formData.dob
                }

                let response = await userRegister(user);
                console.log(response);

                if (response.status == 200) {
                    window.location.href = "/login";
                } else if  (response.status == 400 ) {
                    let emailisTheresThere = true
                } else {
                    alert('Something went wrong!')
                }
                // {"status":400,"message":"This email is already registered"}
            },

            validatePassword() {
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
                this.passwordError = !passwordRegex.test(this.formData.password);
                this.passwordMismatch = this.formData.password !== this.formData.confirmPassword;
                this.passwordLength = this.formData.password.length < 7;
            },
            validateMobile() {
                this.mobileError = this.formData.mobile.length !== 10;
            },

            togglePasswordVisibility() {
                this.showPassword = !this.showPassword;
                const passwordInput = document.getElementById('password');
                passwordInput.type = this.showPassword ? 'text' : 'password';
            },
            toggleConfirmPasswordVisibility() {
                this.showConfirmPassword = !this.showConfirmPassword;
                const confirmPasswordInput = document.getElementById('confirm-password');
                confirmPasswordInput.type = this.showConfirmPassword ? 'text' : 'password';
            },
        },
    };
</script>

    <!--
        <script>
    // export default {
    //     name: 'login',
    //     data() {
    //         return {
    //             showPassword: false,

    //             first_name: null,
    //             last_name: null,
    //             email: null,
    //             mobile: null,
    //             password: null,
    //             gender: null,
    //             dob: null,

    //             confirm_password: null,

    //         }
    //     },
    //     methods: {
    //         togglePasswordVisibility() {
    //             this.showPassword = !this.showPassword;
    //             const passwordInput = document.getElementById('password');
    //             passwordInput.type = this.showPassword ? 'text' : 'password';
    //         },
    //         validatePasswords(event) {
    //             const passwordInput = document.getElementById('password').value;
    //             const confirmPasswordInput = document.getElementById('confirm-password').value;

    //             if (passwordInput !== confirmPasswordInput) {
    //                 alert('Passwords do not match.');
    //                 event.preventDefault(); // Prevent form submission
    //             }
    //         },
    //         async userReg() {
    //             let user = {
    //                 "first_name": "Badhusha",
    //                 "last_name": "Shaji",
    //                 "email": this.email,
    //                 "mobile": this.mobile,
    //                 "password": this.password,
    //                 "gender": "male"
    //             }

    //             let response = await userRegister(user);
    //             console.log(response);
    //         }
    //     }
    // }
    // 
    <
    /script> < /
    script >
    -->
    
<!-- 

// <template>
// <section class="bg-gray-50 dark:bg-gray-900">
//     <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a href="#" >
//             <img class="w-48   h-19" src="../../public/assets/logo.svg" alt="logo">

//         </a>
//         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//                 <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                     Create an account
//                 </h1>
//                 <form class="space-y-4 md:space-y-6 md:flex md:flex-wrap" action="#" @submit.prevent="validatePasswords">
//                     <div class="md:w-1/2 pr-4 pt-6">
//                         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                         <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" v-model="email">
//                     </div>
//                     <div class="md:w-1/2 pl-4 relative">
//                         <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                         <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="password">
//                         <button type="button" class="absolute pt-7 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-400 hover:text-gray-700 focus:outline-none" @click="togglePasswordVisibility">
//                             <svg v-if="showPassword" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
//                             </svg>
//                             <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
//                             </svg>
//                         </button>
//                     </div>
//                     <div class="md:w-1/2 pr-4">
//                         <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                         <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="confirm_password">
//                     </div>
//                     <div class="md:w-1/2 pl-4">
//                         <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
//                         <input type="date" name="dob" id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="dob">
//                     </div>
//                     <div class="md:w-1/2 pr-4">
//                         <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
//                         <input type="tel" name="mobile" id="mobile" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g., +123456789" required="" v-model="mobile">
//                     </div>
//                     <div class="md:w-1/2 pl-4">
//                         <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
//                         <select name="gender" id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
//                             <option value="" disabled selected>Select your gender</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="other">Other</option>
//                         </select>
//                     </div>
//                     <div class="md:w-full">

//                         <button @click="userReg" type="submit" class="w-full text-white bg-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mt-4 ">Create an account</button>
//                         <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
//                             Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </section>
// 
</template>

// <script>
// import {
//     userRegister
// } from '@/API/index.js'

// export default {
//     name: 'login',
//     data() {
//         return {
//             showPassword: false,

//             first_name: null,
//             last_name: null,
//             email: null,
//             mobile: null,
//             password: null,
//             gender: null,
//             dob: null,

//             confirm_password: null,

//         }
//     },
//     methods: {
//         togglePasswordVisibility() {
//             this.showPassword = !this.showPassword;
//             const passwordInput = document.getElementById('password');
//             passwordInput.type = this.showPassword ? 'text' : 'password';
//         },
//         validatePasswords(event) {
//             const passwordInput = document.getElementById('password').value;
//             const confirmPasswordInput = document.getElementById('confirm-password').value;

//             if (passwordInput !== confirmPasswordInput) {
//                 alert('Passwords do not match.');
//                 event.preventDefault(); // Prevent form submission
//             }
//         },
//         async userReg() {
//             let user = {
//                 "first_name": "Badhusha",
//                 "last_name": "Shaji",
//                 "email": this.email,
//                 "mobile": this.mobile,
//                 "password": this.password,
//                 "gender": "male"
//             }

//             let response = await userRegister(user);
//             console.log(response);
//         }
//     }
// }
//<script>
 < /script>
</script> -->
