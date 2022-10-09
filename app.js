// Текст за замовчуванням для Завдань 1, 2, 3, 4
const defaultText = 'KOMAROV';
// Текст за замовчуванням для Завдання 5
const defaultTask5Text = 'KOMAROV OLEKSANDR VALERIIOVYCH';
// Ключ за замовчуванням для Завдання 1
const defaultTask1Key = '10 22 17 07 15 19 01 13 20 26 03 14 25 04 09 05 02 24 21 06 00 08 23 12 16 11 18';
// Алфавіт
const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z _';
// Гасло за замовчуванням для Завдання 2
const slogan = 'UKRAINEVYCTO_';
// Ключ за замовчуванням для Завдання 3
const defaultTask3Key = 'WINNER';
// Ключ за замовчуванням для Завдання 4
const defaultTask4Key = [
    ['K', 'W', 'R', 'H', ','],
    ['P', 'T', 'B', 'N', 'U'],
    ['_', 'D', 'O', 'Z', 'E'],
    ['J', 'F', '.', 'C', 'Y'],
    ['V', 'G', 'A', 'I', 'X'],
    ['M', '-', 'Q', 'L', 'S']
];

// Ключ за замовчуванням для Завдання 5
const defaultTask5Key = 'FOREVER';

// Функція для отримання випадкового цілого числа у діапазоні від 0 до max
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
    const arrayFromDefaultKey = defaultTask1Key.split(' ');
    const arrayFromAlphabet = defaultTask1Key.split(' ');
    // Формуємо список використаних чисел
    const usedNumbersList = {};
    arrayFromDefaultKey.forEach((number) => {
        usedNumbersList[number] = false;
    });
    console.log('usedNumbersList:', usedNumbersList);
    // Рахуємо згенеровані числа
    let numbersCount = 0;
    // Генеруємо числа, доти їх не набереться 27 (00 - 26)
    while (numbersCount < arrayFromAlphabet.length) {
        // Генеруємо число із заданого діапазону
        let generatedNumber = getTwoDigitNumberAsString(getRandomInt(arrayFromAlphabet.length));
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
    const arrayFromDefaultKey = defaultTask1Key.split(' ');
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
        let generatedNumber = getRandomInt(arrayFromAlphabet.length - 1);
        // Якщо це число не використане, додаємо його до рядка результату (result) та відмічаємо його в списку usedNumbersList використаним
        if (!usedNumbersList[generatedNumber]) {
            console.log('generatedNumber:', generatedNumber);
            resultArray.push(generatedNumber);
            usedNumbersList[generatedNumber] = true;
            // Додаємо у рядок, що зберігається у змінній ключа, символ з алфавіту за щойно згенерованим індексом
            result += arrayFromAlphabet[generatedNumber];
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
            while (key.includes(arrayFromAlphabet[alphabetCharIndex])) {
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

// Функція отримання модульної суми
function getModuleSum(number1, number2, maxNumber) {
    return (number1 + number2) % maxNumber;
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
        // Генеруємо число із заданого діапазону (00 - 25), виключаючи індекс 26 (arrayFromAlphabet.length - 1) - символа підкреслення
        let generatedNumber = getRandomInt(arrayFromAlphabet.length - 1);
        // Додаємо у рядок, що зберігається у змінній ключа, символ з алфавіту за щойно згенерованим індексом
        result += arrayFromAlphabet[generatedNumber];
    }
    // Вставляємо ключ у поле для ввода ключа
    document.getElementById('task3Key').value = result;
};

// Функція шифрування текста для Завдання 3
function task3Submit(text = defaultText, key = defaultTask3Key) {
    let result = '';
    // Формуємо рядок довжини тексту для шифрування із ключа, заповнюючи його символами ключа, поки він весь не заповниться
    let keyRow = '';
    for (let i = 0; i < text.length; i++) {
        keyRow += key[i % key.length];
    }
    console.log('text:', text);
    console.log('keyRow:', keyRow);
    // Масив з символів алфавіту
    const arrayFromAlphabet = alphabet.split(' ');
    for (let i = 0; i < text.length; i++) {
        console.log('char:', text[i]);
        // 1. Знаходимо індекс символа тексту в алфавіті (alphabet)
        const charIndexInAlphabet = arrayFromAlphabet.indexOf(text[i]);
        console.log('Індекс символа тексту в алфавіті:', charIndexInAlphabet);
        // 2. Знаходимо індекс символа рядку з ключа в алфавіті
        const keyRowCharIndexInAlphabet = arrayFromAlphabet.indexOf(keyRow[i]);
        console.log('Індекс символа рядку з ключа в алфавіті:', keyRowCharIndexInAlphabet);
        // 2. Знаходимо модульну суму алфавітних індексів відповідних літер з тексту для шифрування та рядка із ключа, беремо з алфавіту символ за індексом, що дорівнює цій сумі, та додаємо цей символ у рядок криптограми (result)
        const indexesModuleSum = getModuleSum(charIndexInAlphabet, keyRowCharIndexInAlphabet, arrayFromAlphabet.length);
        console.log('Модульна сума індексів:', indexesModuleSum);
        console.log('Символ в алфавіті за цим індексом:', arrayFromAlphabet[indexesModuleSum]);
        result += arrayFromAlphabet[indexesModuleSum];
    }
    // Вставляємо зашифрований текст (критпограму) в поле Завдання 3 для криптограми
    document.getElementById('task3Answer').value = result;
};

// Функція генерування ключа для Завдання 4
function task4GenerateKey() {
    // Змінна для формування ключа
    let result = shuffle(defaultTask4Key);
    // Вставляємо ключ у поле для ввода ключа
    fillKeyTable(result);
};

// Функція для виставлення значень ключа в таблицю на сторінці
function fillKeyTable(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            document.getElementById('task4Key-' + (i + 1) + '-' + (j + 1)).value = array[i][j];
        }
    }
};

// Функція для перемішування вмісту масиву
function shuffle(array) {
    // Перетворюємо вхідний двомірний масив на одновимірний
    var arr1d = [].concat.apply([], array);
    console.log('arr1d:', arr1d);

    var m = arr1d.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = arr1d[m];
        arr1d[m] = arr1d[i];
        arr1d[i] = t;
    }

    var arr2d = [];
    for (var i = 0; i < 6; i++) {
        arr2d[i] = [];
        for (var j = 0; j < 5; j++) {
            arr2d[i][j] = arr1d[i * 5 + j];
        }
    }

    return arr2d;
};

// Функція для перевірки даних ключа (key)
function checkKeyData(key) {
    // Змінна для помітки, що у масиві key є хоча б одне значення 'undefined'
    let isKeyContainsUndefined = false;
    // Перевіряємо масив key на значення 'undefined' хоча б одного елементу
    key.forEach((row) => {
        row.forEach((elenent) => {
            if (!elenent) {
                isKeyContainsUndefined = true;
                return;
            }
        });
        if (isKeyContainsUndefined) return;
    })
    // Якщо масив key містить елемент із невизначеним ('udefined') значенням, присвоюємо йому значення за замовченням
    if (isKeyContainsUndefined) {
        key = defaultTask4Key;
    }
    return key;
};

// Функція для отримання позиції (i, j) символа
function getSymbolPosition(symbol, key) {
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < key[0].length; j++) {
            if (key[i][j] == symbol) {
                let result = {};
                result.i = i;
                result.j = j;
                return result;
            }
        }
    }
};

// Функція для отримання правого символа
function getSymbolToTheRight(symbol, key) {
    const symbolPosition = getSymbolPosition(symbol, key);
    const result = symbolPosition.j == key[0].length - 1 ?
        key[symbolPosition.i][0] :
        key[symbolPosition.i][symbolPosition.j + 1];
    return result;
}

// Функція для отримання нижчого символа
function getSymbolToTheDown(symbol, key) {
    const symbolPosition = getSymbolPosition(symbol, key);
    const result = symbolPosition.i == key.length - 1 ?
        key[0][symbolPosition.j] :
        key[symbolPosition.i + 1][symbolPosition.j];
    return result;
}

// Функція для отримання горизонтально розміщеного символа
function getSymbolToTheHorizont(symbolMain, symbolHelper, key) {
    const symbolMainPosition = getSymbolPosition(symbolMain, key);
    const symbolHelperPosition = getSymbolPosition(symbolHelper, key);
    const result = key[symbolMainPosition.i][symbolHelperPosition.j];
    return result;
}

// Функція шифрування текста для Завдання 3
function task4Submit(text = defaultText, key) {
    let result = '';
    // Перевіряємо ключ на наявність невизначених значень
    const checkedKey = checkKeyData(key);
    console.log('text:', text);
    console.log('checkedKey:', checkedKey);

    // Якщо текст має непарну кількість символів, доповнюємо його крапкою
    if (text.length % 2 == 1) {
        text += '.';
    }

    // Замінюємо символи тексту згідно з ключем за правилами шифру Плейфера
    for (let i = 0; i < text.length; i += 2) {
        // Знаходимо позиції символів у ключі
        let symbol1Position = getSymbolPosition(text[i], checkedKey);
        let symbol1 = text[i];
        console.log('symbol1:', symbol1);
        console.log('symbol1Position:', symbol1Position);
        let symbol2Position = getSymbolPosition(text[i + 1], checkedKey);
        let symbol2 = text[i + 1];
        console.log('symbol2:', symbol2);
        console.log('symbol2Position:', symbol2Position);

        // Якщо пара символів знаходиться в одному рядку, то у криптограму додаємо символи, кожен з яких розміщений на один правіше відповідного символа пари
        if (symbol1Position.i == symbol2Position.i) {
            console.log('getSymbolToTheRight');
            result += getSymbolToTheRight(symbol1, checkedKey) + getSymbolToTheRight(symbol2, checkedKey);
        }

        // Якщо пара символів знаходиться в одному стовпчику, то у криптограму додаємо символи, кожен з яких розміщений на один нижче відповідного символа пари
        else if (symbol1Position.j == symbol2Position.j) {
            console.log('getSymbolToTheDown');
            result += getSymbolToTheDown(symbol1, checkedKey) + getSymbolToTheDown(symbol2, checkedKey);
        }

        // Інакше у криптограму додаємо символи за таким принципом: кожен символ замінюємо тим символом ключа, який знаходиться у тому ж рядку, що даний, та на стовпці іншого символа
        else {
            console.log('getSymbolToTheHorizont');
            result += getSymbolToTheHorizont(symbol1, symbol2, checkedKey) + getSymbolToTheHorizont(symbol2, symbol1, checkedKey);
        }
    }
    // Вставляємо зашифрований текст (критпограму) в поле Завдання 2 для криптограми
    document.getElementById('task4Answer').value = result;
};

// Функція генерування ключа для Завдання 5
function task5GenerateKey() {
    // Змінна для формування ключа
    let result = '';
    // Обчислюємо довжину ключа (6-9 символів, але не більше за довжину тексту для шифрування)
    const keyLength = getKeyLength();
    console.log('Довжина ключа:', keyLength);
    // Масив з символів алфавіту
    const arrayFromAlphabet = alphabet.split(' ');
    // Генеруємо ключ
    for (let i = 0; i < keyLength; i++) {
        // Генеруємо число із заданого діапазону (00 - 25), виключаючи індекс 26 (arrayFromAlphabet.length - 1) - символа підкреслення
        let generatedNumber = getRandomInt(arrayFromAlphabet.length - 1);
        // Додаємо у рядок, що зберігається у змінній ключа, символ з алфавіту за щойно згенерованим індексом
        result += arrayFromAlphabet[generatedNumber];
    }
    // Вставляємо ключ у поле для ввода ключа
    document.getElementById('task5Key').value = result;
};

// Функція шифрування текста для Завдання 5
function task5Submit(text = defaultTask5Text, key = defaultTask5Key) {
    let result = '';
    // Масив для запам'ятовування індексів символів рядку ключа
    let keyCharsIndexes = [];
    // Масив для формування криптограми
    let keyAndTextChars = [];
    console.log('text:', text);
    console.log('key:', key);
    // Видаляємо з тексту пробіли
    const textWithoutSpaces = text.split(' ').join('');
    console.log('textWithoutSpaces:', textWithoutSpaces);
    // Розраховуємо кількість рядків, потрібну для розміщення у двовимірному масиві рядка ключа (key) та тексту (text): округлюємо ділення в більшу сторону, щоб місць хватило для всіх символів (останній рядок може бути неповним)
    const keyAndTextCharsRows = Math.ceil(textWithoutSpaces.length / key.length);
    // Масив з символів алфавіту
    const arrayFromAlphabet = alphabet.split(' ');
    // Формуємо таблицю для складання шифру
    const arrayFromKeyChars = key.split('');
    keyAndTextChars[0] = arrayFromKeyChars;
    for (let i = 0; i < keyAndTextCharsRows; i++) {
        // Записуємо у рядок [i + 1], тому що в перший рядок (з індексом 0) вже записали ключ
        keyAndTextChars[i + 1] = [];
        for (let j = 0; j < key.length; j++) {
            // Записуємо текст (text) у двовимірний масив 
            keyAndTextChars[i + 1][j] = textWithoutSpaces[i * key.length + j];
        }
    }
    console.log('keyAndTextChars:', keyAndTextChars);

    // Призначаємо літерам ключа порядкові номери за їх позиціями у алфавіті, але номери йдуть по порядку без повтору, та у однакових символів номери зростають по мірі появлення символів зліва направо (наприклад, для слова "АГА": А - 1, А - 2, Г - 3)
    let charNumber = 0;
    let keyCharsNumbersByAlphabet = {};
    // Формуємо список використаних літер ключа
    const usedKeyCharsList = {};
    arrayFromKeyChars.forEach((char) => {
        // Індекс використовується, а потім збільшується на 1
        usedKeyCharsList[charNumber++] = {char, isUsed: false};
    });
    console.log('usedKeyCharsList:', usedKeyCharsList);

    // Функція для отримання рядку з усіх наявних елементів у стовпці index двовимірного масиву array
    function getRowByIndex(index, array) {
        let result = '';
        for (let i = 1; i < array.length; i++) {
            if (array[i][index]) {
                result += array[i][index];
            }
        }
        return result;
    };

    // Проходимося з алфавітом по кожному символу рядка ключа та відмічаємо цей символ порядковим номером (таким чином ми їх як би впорядковуємо за алфавітом), та записуємо для цього символа рядок із символів відповідного стовпця масива keyAndTextChars рядка ключа (key) та тексту (text). З набору стовпців (з кожного стовпця усі символи, починаючи з другого (з індексом 1)) масиву keyAndTextChars формується криптограма
    charNumber = 0;
    arrayFromAlphabet.forEach((char) => {
        for (let i = 0; i < key.length; i++) {
            // Якщо цей символ ще не використовувався та співпадає з поточним символом з алфавіту
            if (!usedKeyCharsList[i].isUsed && arrayFromKeyChars[i] == char) {
                // Індекс збільшується на 1, а потім використовується
                let encryptioPart = getRowByIndex(i, keyAndTextChars);
                keyCharsNumbersByAlphabet[++charNumber] = {char, row: encryptioPart};
                usedKeyCharsList[i].isUsed = true;
                // Додаємо (зберігаємо) знайдену послідовність символів у рядок криптограми
                result += encryptioPart;
            }
        }
    });
    console.log('keyCharsNumbersByAlphabet:', keyCharsNumbersByAlphabet);

    // Запам'ятовуємо в масив індекси символів рядку ключа
    for (let i = 0; i < key.length; i++) {
        console.log('key char:', key[i]);
        // 1. Знаходимо індекс символа ключа в алфавіті (alphabet)
        const charIndexInAlphabet = arrayFromAlphabet.indexOf(key[i]);
        console.log('Індекс символа ключа в алфавіті:', charIndexInAlphabet);
        // 2. Додаємо цей індекс в масив індексів символів рядку ключа
        keyCharsIndexes.push(getTwoDigitNumberAsString(charIndexInAlphabet));
    }

    console.log('keyCharsIndexes:', keyCharsIndexes);
    // Сортуємо масив індексів символів рядку ключа
    keyCharsIndexes.sort();
    console.log('keyCharsIndexes:', keyCharsIndexes);


    // Вставляємо зашифрований текст (критпограму) в поле Завдання 5 для криптограми
    document.getElementById('task5Answer').value = result;
};