const email = `test${Date.now()}@example.com`;
const password = "Test@12345";

async function testAuth() {
    try {
        // REGISTER
        const registerResponse = await fetch("http://127.0.0.1:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Test Student",
                email,
                password,
                confirmPassword: password,
                role: "student"
            })
        });

        const registerData = await registerResponse.json();
        console.log("Registration:", registerData);

        // LOGIN
        const loginResponse = await fetch("http://127.0.0.1:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const loginData = await loginResponse.json();
        console.log("Login Success:", loginData.success);

const profileResponse = await fetch(
    "http://127.0.0.1:5000/api/auth/profile",
    {
        headers: {
            "Authorization": `Bearer ${loginData.token}`
        }
    }
);

const profileData = await profileResponse.json();

console.log("Profile Response:", profileData);
// TEST ADMIN ACCESS
const adminResponse = await fetch(
    "http://127.0.0.1:5000/api/admin/dashboard",
    {
        headers: {
            "Authorization": `Bearer ${loginData.token}`
        }
    }
);

const adminData = await adminResponse.json();

console.log("Admin Access Status:", adminResponse.status);
console.log("Admin Access Response:", adminData);

    } catch (error) {
        console.log("Error:", error.message);
    }
}


testAuth();