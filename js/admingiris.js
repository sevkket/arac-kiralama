function login() {
            const adminUsername = 'tayfunsoy';
            const adminPassword = 'tayfunsoy123';
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === adminUsername && password === adminPassword) { 
                window.location.href = 'yönetici1.html';
            } else {
                
                document.getElementById('errorMessage').style.display = 'block';
            }
        }