// Текст за замовчуванням для Завдань 1, 2
const defaultText = 'KOMAROV';
// Ключ за замовчуванням для Завдання 1
const defaultTask1Key = '10 22 17 07 15 19 01 13 20 26 03 14 25 04 09 05 02 24 21 06 00 08 23 12 16 11 18';
// Алфавіт
const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z _';
// Гасло за замовчуванням для Завдання 2
const slogan = 'UKRAINEVYCTO_';
// Ключ за замовчуванням для Завдання 3
const defaultTask3Key = 'WINNER';

// Функція для отримання випадкового цілого числа у діапазоні від 0 до max
/* function getRandomInt(max) {
    const result = Math.floor(Math.random() * max);
    return result.toString().length == 1 ? '0' + result.toString() : result.toString();
} */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Функція для приведення числа до двозначного вигляду та у вигляді рядка (тексту)
function getTwoDigitNumberAsString(number) {
    return number.toString().length == 1 ? '0' + number.toString() : number.toString();
}

// Функція генерування ключа для Завдання 1
function task1GenerateKey() {
    // Масив для запам'ятовування зенерованих чисел для формування випадкового ключа
    let resultArray = [];
    // Беремо ключ за замовченям для отримання списку чисел для генерації ключа
    let arrayFromDefaultKey = defaultTask1Key.split(' ');
    // Формуємо список використаних чисел
    const usedNumbersList = {};
    arrayFromDefaultKey.forEach((number) => {
        usedNumbersList[number] = false;
    });
    console.log('usedNumbersList:', usedNumbersList);
    // Рахуємо згенеровані числа
    let numbersCount = 0;
    // Генеруємо числа, доти їх не набереться 27 (00 - 26)
    while (numbersCount < 27) {
        // Генеруємо число із заданого діапазону
        let generatedNumber = getTwoDigitNumberAsString(getRandomInt(27));
        // Якщо це число не використане, додаємо його до рядка результату (result) та відмічаємо його в списку usedNumbersList використаним
        if (!usedNumbersList[generatedNumber]) {
            resultArray.push(generatedNumber);
            usedNumbersList[generatedNumber] = true;
            // Та збільшуємо значення лічильника чисел на 1
            numbersCount++;
        }
    }
    // Формуємо ключ з масива згенерованих чисел та вставляємо його в поле для вводу ключа
    document.getElementById('task1Key').value = resultArray.join(' ');
};

// Функція шифрування текста для Завдання 1
function task1Submit(text = defaultText, key = defaultTask1Key) {
    let result = '';
    for (let char of text) {
        console.log('char:', char);
        const arrayFromAlphabet = alphabet.split(' ');
        const arrayFromKey = key.split(' ');
        // 1. Знаходимо індекс символа тексту в алфавіті (alphabet)
        const charIndexInAlphabet = arrayFromAlphabet.indexOf(char).toString();
        console.log('Індекс символа тексту в алфавіті:', charIndexInAlphabet);
        // 2. Знаходимо елемент ключа за цим індексом
        const keyElementByCharIndex = arrayFromKey[charIndexInAlphabet];
        console.log('Елемент ключа за цим індексом:', keyElementByCharIndex);
        // 3. Знаходимо символ в алфавіті за індексом, який дорівнює знайденому елементу ключа
        const alphabetElementByIndexOfKeyValue = arrayFromAlphabet[parseInt(keyElementByCharIndex)];
        console.log('Символ в алфавіті за індексом, який дорівнює знайденому елементу ключа:', alphabetElementByIndexOfKeyValue);
        // 4. Додаємо знайдений символ зашифрованого тексту в рядок результату (result)
        result += alphabetElementByIndexOfKeyValue;
    }
    document.getElementById('task1Answer').value = result;
};

// Функція генерування ключа для Завдання 2
function task2GenerateKey() {
    // Змінна для формування ключа
    let result = '';
    // Масив для запам'ятовування зенерованих чисел для формування випадкового ключа
    let resultArray = [];
    // Масив з символів алфавіту
    const arrayFromAlphabet = alphabet.split(' ');
    // Беремо ключ за замовченям для отримання списку чисел для генерації ключа
    let arrayFromDefaultKey = defaultTask1Key.split(' ');
    // Формуємо список використаних чисел
    const usedNumbersList = {};
    arrayFromDefaultKey.forEach((number) => {
        usedNumbersList[number] = false;
    });
    console.log('usedNumbersList:', usedNumbersList);
    // Рахуємо згенеровані числа
    let numbersCount = 0;
    // Генеруємо числа, доти їх не набереться 12 (з діапазону 00 - 26)
    while (numbersCount < 13) {
        // Генеруємо число із заданого діапазону (00 - 25), виключаючи індекс 26 - символа підкреслення
        // let generatedNumber = getTwoDigitNumberAsString(getRandomInt(26));
        let generatedNumber = getRandomInt(26);
        // Якщо це число не використане, додаємо його до рядка результату (result) та відмічаємо його в списку usedNumbersList використаним
        if (!usedNumbersList[generatedNumber]) {
            console.log('generatedNumber:', generatedNumber);
            resultArray.push(generatedNumber);
            usedNumbersList[generatedNumber] = true;
            // Додаємо у рядок, що зберігається у змінній ключа, символ з алфавіту за щойно згенерованим індексом
            // result += arrayFromAlphabet[parseInt(generatedNumber)]; // parseInt(generatedNumber) - отримуємо ціле число зі значення змінної generatedNumber, тому що воно там у вигляді рядка (текста)
            result += arrayFromAlphabet[generatedNumber]; // parseInt(generatedNumber) - отримуємо ціле число зі значення змінної generatedNumber, тому що воно там у вигляді рядка (текста)
            // Та збільшуємо значення лічильника чисел на 1
            numbersCount++;
        }
    }
    // Додаємо до рядку ключа символ підкреслення (_)
    result += '_';
    // Вставляємо ключ у поле для ввода ключа
    document.getElementById('task2Key').value = result;
};

// Функція шифрування текста для Завдання 2
function task2Submit(text = defaultText, key = slogan) {
    let result = '';
    // Формуємо таблицю замін для формування криптограми
    let replacementsTable = {};
    // Масив з символів алфавіту
    const arrayFromAlphabet = alphabet.split(' ');
    // Змінна для збереження індексу поточного символа алфавіту
    let alphabetCharIndex = 0;
    for (let i = 0; i < 27; i++) {
        // Якщо у рядку key за індексом i існує символ, то записуємо в таблицю замін його
        if (key[i]) {
            replacementsTable[i] = key[i];
        }
        // Інакше (якщо такого символу нема) додаємо далі у таблицю замін найперший символ з алфавіту, який не зустрічається в рядку ключа (key)
        else {
            // Поки рядок ключа містить символ алвавіту за індексом alphabetCharIndex, переходимо до наступного індексу
            while(key.includes(arrayFromAlphabet[alphabetCharIndex])) {
                alphabetCharIndex++;
            }
            // А коли такого символу немає, - дописуємо його в таблицю замін
            replacementsTable[i] = arrayFromAlphabet[alphabetCharIndex];
            alphabetCharIndex++;
        }
    }
    console.log('Таблиця замін:', replacementsTable);
    for (let char of text) {
        console.log('char:', char);
        // 1. Знаходимо індекс символа тексту в алфавіті (alphabet)
        const charIndexInAlphabet = arrayFromAlphabet.indexOf(char).toString();
        console.log('Індекс символа тексту в алфавіті:', charIndexInAlphabet);
        // 2. Знаходимо елемент таблиці замін за цим індексом
        const replacementsTableElementByCharIndex = replacementsTable[charIndexInAlphabet];
        console.log('Елемент таблиці замін за цим індексом:', replacementsTableElementByCharIndex);
        // 3. Додаємо знайдений символ зашифрованого тексту в рядок результату (result)
        result += replacementsTableElementByCharIndex;
    }
    // Вставляємо зашифрований текст (критпограму) в поле Завдання 2 для криптограми
    document.getElementById('task2Answer').value = result;
};

// Функція для отримання довжини ключа
function getKeyLength() {
    const textToEncrypt = document.getElementById('task3Text').value || defaultText;
    console.log('Текст для шифрування:', textToEncrypt);
    // Генеруємо попередньо довжину ключа (випадково згенероване ціле число від 6 до 9)
    const keyLength = 6 + getRandomInt(4);
    // Якщо дожина текста для шифрування менша за довжину ключа, повертаємо цю довжину, інакше - довжину ключа
    return textToEncrypt.length < keyLength ? textToEncrypt.length : keyLength;
}

// Функція генерування ключа для Завдання 3
function task3GenerateKey() {
    // Змінна для формування ключа
    let result = '';
    // Обчислюємо довжину ключа (6-9 символів, але не більше за довжину тексту для шифрування)
    const keyLength = getKeyLength();
    console.log('Довжина ключа:', keyLength);
    // Масив з символів алфавіту
    const arrayFromAlphabet = alphabet.split(' ');
    // Генеруємо ключ
    for (let i = 0; i < keyLength; i++) {
        // Генеруємо число із заданого діапазону (00 - 25), виключаючи індекс 26 - символа підкреслення
        let generatedNumber = getTwoDigitNumberAsString(getRandomInt(26));
        // Додаємо у рядок, що зберігається у змінній ключа, символ з алфавіту за щойно згенерованим індексом
        result += arrayFromAlphabet[parseInt(generatedNumber)]; // parseInt(generatedNumber) - отримуємо ціле число зі значення змінної generatedNumber, тому що воно там у вигляді рядка (текста)
    }
    // Вставляємо ключ у поле для ввода ключа
    document.getElementById('task3Key').value = result;
};

// Функція шифрування текста для Завдання 3
function task3Submit(text = defaultText, key = slogan) {
    let result = '';
    // Формуємо таблицю замін для формування криптограми
    let replacementsTable = {};
    // Масив з символів алфавіту
    const arrayFromAlphabet = alphabet.split(' ');
    // Змінна для збереження індексу поточного символа алфавіту
    let alphabetCharIndex = 0;
    for (let i = 0; i < 27; i++) {
        // Якщо у рядку key за індексом i існує символ, то записуємо в таблицю замін його
        if (key[i]) {
            replacementsTable[i] = key[i];
        }
        // Інакше (якщо такого символу нема) додаємо далі у таблицю замін найперший символ з алфавіту, який не зустрічається в рядку ключа (key)
        else {
            // Поки рядок ключа містить символ алвавіту за індексом alphabetCharIndex, переходимо до наступного індексу
            while(key.includes(arrayFromAlphabet[alphabetCharIndex])) {
                alphabetCharIndex++;
            }
            // А коли такого символу немає, - дописуємо його в таблицю замін
            replacementsTable[i] = arrayFromAlphabet[alphabetCharIndex];
            alphabetCharIndex++;
        }
    }
    console.log('Таблиця замін:', replacementsTable);
    for (let char of text) {
        console.log('char:', char);
        // 1. Знаходимо індекс символа тексту в алфавіті (alphabet)
        const charIndexInAlphabet = arrayFromAlphabet.indexOf(char).toString();
        console.log('Індекс символа тексту в алфавіті:', charIndexInAlphabet);
        // 2. Знаходимо елемент таблиці замін за цим індексом
        const replacementsTableElementByCharIndex = replacementsTable[charIndexInAlphabet];
        console.log('Елемент таблиці замін за цим індексом:', replacementsTableElementByCharIndex);
        // 3. Додаємо знайдений символ зашифрованого тексту в рядок результату (result)
        result += replacementsTableElementByCharIndex;
    }
    // Вставляємо зашифрований текст (критпограму) в поле Завдання 2 для криптограми
    document.getElementById('task3Answer').value = result;
};