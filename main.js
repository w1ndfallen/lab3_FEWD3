let enterprises = [
    {
        name: "Агрофірма Зелений Світ",
        activity: "Вирощування овочів"
    },
    {
        name: "Молочна ферма Бурьонка",
        activity: "Молочне виробництво"
    },
    {
        name: "Птахофабрика Золота Курка",
        activity: "Птахівництво"
    }
];

let products = [
    {
        name: "Помідори",
        storage_period: "14 днів",
        is_new: "Так"
    },
    {
        name: "Молоко",
        storage_period: "5 днів",
        is_new: "Ні"
    },
    {
        name: "Яйця",
        storage_period: "30 днів",
        is_new: "Так"
    }
];

let supplies = [
    {
        enterprise: "Агрофірма Зелений Світ",
        product: "Помідори",
        date: "2025-06-15",
        volume: "500 кг",
        quality_rating: "Відмінна"
    },
    {
        enterprise: "Молочна ферма Бурьонка",
        product: "Молоко",
        date: "2025-06-16",
        volume: "200 л",
        quality_rating: "Хороша"
    },
    {
        enterprise: "Птахофабрика Золота Курка",
        product: "Яйця",
        date: "2025-06-17",
        volume: "1000 шт",
        quality_rating: "Відмінна"
    }
];

const enterprisesTab = document.getElementById('enterprises');
let enterprisesTabContent = `
    <h3>Підприємства</h3>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Назва</th>
                <th>Вид діяльності</th>
                <th>Дії</th>
            </tr>
        </thead>
        <tbody>
`;

for(let i = 0; i < enterprises.length; i++){
    enterprisesTabContent += `
    <tr>
        <td>${enterprises[i].name}</td>
        <td>${enterprises[i].activity}</td>
        <td>-</td>
    </tr>
    `;
}

enterprisesTabContent += `</tbody>
</table>`;
enterprisesTab.innerHTML = enterprisesTabContent;

const suppliesTab = document.getElementById('supplies');
let suppliesTabContent = `
    <h3>Поставлення</h3>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Підприємство</th>
                <th>Продукція</th>
                <th>Дата</th>
                <th>Обсяг</th>
                <th>Оцінка якості</th>
                <th>Дії</th>
            </tr>
        </thead>
        <tbody>
`;

for(let i = 0; i < supplies.length; i++){
    suppliesTabContent += `
    <tr>
        <td>${supplies[i].enterprise}</td>
        <td>${supplies[i].product}</td>
        <td>${supplies[i].date}</td>
        <td>${supplies[i].volume}</td>
        <td>${supplies[i].quality_rating}</td>
        <td>-</td>
    </tr>
    `;
}

suppliesTabContent += `</tbody>
</table>`;
suppliesTab.innerHTML = suppliesTabContent;

const productsTab = document.getElementById('products');
let productsTabContent = `
    <h3>Продукція</h3>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Назва</th>
                <th>Термін зберігання</th>
                <th>Нова загальна</th>
                <th>Дії</th>
            </tr>
        </thead>
        <tbody>
`;

for(let i = 0; i < products.length; i++){
    productsTabContent += `
    <tr>
        <td>${products[i].name}</td>
        <td>${products[i].storage_period}</td>
        <td>${products[i].is_new}</td>
        <td>-</td>
    </tr>
    `;
}

productsTabContent += `</tbody>
</table>`;
productsTab.innerHTML = productsTabContent;
