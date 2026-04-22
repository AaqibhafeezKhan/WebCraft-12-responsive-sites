document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.food-icons-grid i');
    let i = 0;

    if (icons.length > 0) {
        setInterval(() => {
            icons[i].classList.remove('active');
            i++;

            if (i >= icons.length) {
                i = 0;
            }

            icons[i].classList.add('active');
        }, 3000);
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('signup-email').value;
            if (email) {
                alert(`Thank you for signing up with ${email}!`);
                signupForm.reset();
            }
        });
    }

    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mealName = btn.parentElement.querySelector('.meal-name').textContent;
            alert(`Your order for ${mealName} has been placed!`);
        });
    });
});