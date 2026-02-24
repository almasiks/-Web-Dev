import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    categories: Category[] = [
        { id: 1, name: 'Vacuum Cleaners' },
        { id: 2, name: 'Washing Machines' },
        { id: 3, name: 'Books' },
        { id: 4, name: 'Smart Watches' }
      ];
    
      products: Product[] = [
        //category vacuum cleaners
    {   id: 1,
        categoryId: 1,
        name: 'Пылесос Deerma DX118C белый', 
        price: 11968,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/pe2/61876460.jpg?format=gallery-medium', 
        likes: 6600, 
        link: 'https://kaspi.kz/shop/p/deerma-dx118c-belyi-100825416/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE', 
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p4f/pe2/61876460.jpg?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/p88/pe2/61876462.png?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/p31/pe3/61876468.jpg?format=gallery-large'], 
        description: 'С вертикальным пылесосом Deerma DX118C все члены семьи полюбят уборку настолько, что будут гореть желанием делать ее каждый день.', 
        rating: 5 
        },
        {
        id: 2,
        categoryId: 1,
        name: 'Пылесос ZAMAN PRO', 
        price: 32990,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/pfa/100119973.jpeg?format=gallery-medium', 
        likes: 243, 
        link: 'https://kaspi.kz/shop/p/zaman-pro-x300-seryi-krasnyi-147503514/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p7f/pfa/100119973.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p15/pf7/100119974.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p31/pe3/61876468.jpg?format=gallery-large'
        ], 
        description: "ZAMAN PRO X300 — это инновационное решение для быстрой и эффективной уборки дома. Совмещает в себе стильный дизайн, продуманную эргономику и высокую производительность.",
        rating: 4.9
     },
        {
        id: 3,
        categoryId: 1,
        name: 'Пылесос TUMAR G', 
        price: 24990,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p99/p03/35167078.jpg?format=gallery-medium',
        likes: 1447, 
        link: 'https://kaspi.kz/shop/p/tumar-g-pro-200-seryi-137690746/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p99/p03/35167078.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pb6/p03/35167079.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p22/p06/35167080.jpg?format=gallery-medium'
        ], 
        description: 'TUMAR G PRO 200 – Компактный и Мощный Проводной Пылесос!',
        rating: 4.7
        },
        {
        id: 4,
        categoryId: 1,
        name: 'Пылесос YOKU Kraft CL250', 
        price: 51700,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/p19/76628259.jpeg?format=gallery-medium',
        likes: 958, 
        link: 'https://kaspi.kz/shop/p/yoku-kraft-cl250-146020575/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa1/p19/76628259.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pa2/pdf/66053128.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p23/p91/66053130.jpeg?format=gallery-medium'
        ], 
        description: 'Пылесос YOKU MIVAN-CL286 — мощь и чистота в одном корпусе! Этот проводной пылесос с мощностью 2500 Вт обеспечит идеальную уборку вашего дома. С его помощью вы сможете легко справиться с любыми загрязнениями, от пыли до шерсти домашних животных.',
        rating: 5.0
        },
        {
        id: 5,
        categoryId: 1,
        name: 'Пылесос AVENTIX G500 ', 
        price: 42990,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p0e/91310493.jpeg?format=gallery-medium',
        likes: 400, 
        link: 'https://kaspi.kz/shop/p/aventix-g500-chernyi-fioletovyi-144371769/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pc3/p0e/91310493.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p9c/pa6/60331860.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p5f/p9c/60331863.jpeg?format=gallery-medium'
        ], 
        description: 'AVENTIX — это не просто пылесос, это ваш персональный сервис чистоты, который всегда под рукой. Лёгкий, мощный, стильный — он создан для дома, в котором хочется жить.',
        rating: 4.5
        },
        //category washing machines
        {
        id: 1,
        categoryId: 2,
        name: 'Стиральная машина ARG JG60-A112VE', 
        price: 94990,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/p41/87410294.png?format=gallery-medium',
        likes: 2666, 
        link: 'https://kaspi.kz/shop/p/arg-jg60-a112ve-belyi-130290857/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p2b/p41/87410294.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p4a/pc5/11196758.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p11/pc5/11196756.png?format=gallery-medium'], 
        description: 'Стиральная машина ARG JG60-A112VE — эффективное решение для вашего дома, обеспечивающее высокое качество стирки и удобство использования.',
        rating: 4.9 
        },
        {
        id: 2,
        categoryId: 2,
        name: 'Стиральная машина LG F2M5HS6S', 
        price: 340000,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb4/p8d/46623929.jpg?format=gallery-medium',
        likes: 1574, 
        link: 'https://kaspi.kz/shop/p/lg-f2m5hs6s-serebristyi-3601448/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pb4/p8d/46623929.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h32/h69/86929965023262.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha1/ha1/86929965056030.jpg?format=gallery-medium'], 
        description: 'Стиральная машина LG F2M5HS6S в черно-серебристом корпусе станет идеальным выбором для большой семьи за счет возможности стирать до 7 кг белья за цикл.',
        rating: 4.9 
        },
         {
        id: 3,
        categoryId: 2,
        name: 'Стиральная машина AVANGARD', 
        price: 99990,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p43/80066044.jpg?format=gallery-medium',
        likes: 1049, 
        link: 'https://kaspi.kz/shop/p/avangard-aa1612w-belyi-138496418/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p67/p43/80066044.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p4b/p43/80066045.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p4b/p43/80066045.jpg?format=gallery-medium'],
        description: 'Стиральная машина AVANGARD— современное решение для вашего дома, обеспечивающее высокое качество стирки и энергетическую эффективность',
        rating: 4.2
        },
         {
        id: 4,
        categoryId: 2,
        name: 'Стиральная машина Leadbros MG80-14586B', 
        price: 149000,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p01/46741696.jpg?format=gallery-medium',
        likes: 1179, 
        link: 'https://kaspi.kz/shop/p/leadbros-mg80-14586b-seryi-106761960/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pfd/p01/46741696.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p9f/p27/46225846.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p67/p27/46225844.jpg?format=gallery-medium'],
        description: 'LEADBROS — cтиральная машина, которая реально знает, как стирать! С её помощью вы сможете легко справиться с любыми загрязнениями, от пыли до шерсти домашних животных. Мощность 1450 Вт обеспечит идеальную уборку вашего дома.',
        rating: 4.2
        },
         {
        id: 5,
        categoryId: 2,
        name: 'Стиральная машина Haier HW60-BP12919B', 
        price: 169000,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p29/pc1/46674383.jpg?format=gallery-medium',
        likes: 455, 
        link: 'https://kaspi.kz/shop/p/haier-hw60-bp12919b-belyi-107341625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/pc1/46674383.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p63/p3a/20646940.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pa3/p37/20646936.jpg?format=gallery-medium'],
        description: 'Стиральная машина HW60-BP12919B обладает оптимальным объёмом загрузки 6 кг, который одинаково хорошо подходит для ежедневной и интенсивной, объёмной стирки.',
        rating: 4.2
        },
        //category books
         {
        id: 1,
        categoryId: 3,
        name: 'Книга Коэльо П.: Алхимик', 
        price: 3303,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pdb/p80/38139294.jpg?format=gallery-large',
        likes: 176, 
        link: 'https://kaspi.kz/shop/p/koel-o-p-alhimik-26018156/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pdb/p80/38139294.jpg?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/p4c/p81/38139298.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p68/p81/38139299.jpg?format=gallery-medium'], 
        description: 'Книга "Алхимик" Пабло Коэльо — это история о мечте и пути к ней, полная философских размышлений и духовного пробуждения.',
        rating: 4.7 
        },
        {
        id: 2,
        categoryId: 3,
        name: 'Книга Ремарк Э. М.: Три товарища', 
        price: 2583,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h40/63826306072606.jpg?format=gallery-medium',
        likes: 128, 
        link: 'https://kaspi.kz/shop/p/remark-e-m-tri-tovarischa-100010730/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h67/h40/63826306072606.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hda/hec/63826309021726.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hb4/h4d/63826312232990.jpg?format=gallery-medium'], 
        description: 'Книга "Три товарища" Эриха Марка Ремарка — это история о дружбе и преданности в условиях войны, наполненная глубокими философскими размышлениями.',
        rating: 4.9 
        },
         {
        id: 3,
        categoryId: 3,
        name: 'Книга Ли Х.: Убить пересмешника', 
        price: 3530,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf9/p38/38356188.jpg?format=gallery-medium',
        likes: 45, 
        link: 'https://kaspi.kz/shop/p/li-h-ubit-peresmeshnika-26003932/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pf9/p38/38356188.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p70/p36/38356190.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p1c/p36/38356193.jpg?format=gallery-medium'],
        description: 'Книга "Убить пересмешника" Харпер Ли — это классическая история о расовой несправедливости и моральной доброте в южных штатах США.',
        rating: 4.7
        },
         {
        id: 4,
        categoryId: 3,
        name: 'Книга Гессе Г.: Демиан', 
        price: 2343,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/p07/38132529.jpg?format=gallery-medium',
        likes: 26, 
        link: 'https://kaspi.kz/shop/p/gesse-g-demian-100328680/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p66/p07/38132529.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p89/p04/38132534.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p18/p04/38132538.jpg?format=gallery-medium'],
        description: 'Книга "Демиан" Германа Гессе — это философская история о внутреннем пути юноши, стремящегося к самопознанию и духовному пробуждению.',
        rating: 4.8
        },
         {
        id: 5,
        categoryId: 3,
        name: 'Книга Ремарк Э.М.: На Западном фронте без перемен', 
        price: 2450,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h28/64222307778590.jpg?format=gallery-medium',
        likes: 37, 
        link: 'https://kaspi.kz/shop/p/remark-e-m-na-zapadnom-fronte-bez-peremen-103103523/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h3b/h28/64222307778590.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3b/h28/64222307778590.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3b/h28/64222307778590.jpg?format=gallery-medium'],
        description: 'Книга "На Западном фронте без перемен" Эриха Марка Ремарка — это классическая история о войне и её последствиях для молодых людей.',
        rating: 5.0
        },
        //category smart watches
         {
        id: 1,
        categoryId: 4,
        name: 'Смарт-часы NOLIMIT GPS черный', 
        price: 39900,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium',
        likes: 1250, 
        link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-gps-chernyi-137675544/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p41/p6c/67028248.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p25/p6c/67028249.jpg?format=gallery-medium'], 
        description: 'Смарт-часы NOLIMIT GPS черный — это стильные и функциональные часы с GPS-навигацией, поддержкой уведомлений и долгим временем работы.',
        rating: 5.0
        },
        {
        id: 2,
        categoryId: 4,
        name: 'Смарт-часы Xiaomi Redmi Watch 5 Active 51 мм', 
        price: 15786,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/p5f/88411228.jpg?format=gallery-medium',
        likes: 886, 
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p12/p5f/88411228.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hec/h25/87197780049950.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe1/p5b/88411236.jpg?format=gallery-medium'], 
        description: 'Redmi Watch 5 Active с большим дисплеем помогут вести активны образ жизни, контролировать ваше здоровье и повысить эффективность при решении повседневных задач. Встроенные спортивные режимы позволяют всегда оставаться в форме.' ,
        rating: 4.9 
        },
         {
        id: 3,
        categoryId: 4,
        name: 'Смарт-часы COLMI P28 Plus', 
        price: 7470,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/hed/64420698554398.jpg?format=gallery-medium',
        likes: 794, 
        link: 'https://kaspi.kz/shop/p/colmi-p28-plus-zolotistyi-bezhevyi-106175099/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hf5/hed/64420698554398.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h74/h2b/81277661282334.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h44/hce/81277661610014.png?format=gallery-medium'],
        description: 'Смарт-часы Colmi P28 Plus. Соответствующие датчики помогают смарт-часам подсчитывать пройденное расстояние, затраченные калории, содержание кислорода в крови, артериальное давление. '  ,
        rating: 4.7
        },
         {
        id: 4,
        categoryId: 4,
        name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм', 
        price: 139900,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        likes: 671, 
        link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'],
            description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм. Смарт-часы Apple Watch SE обладают функцией отслеживания активности, включая подсчет шагов, калорий и расстояния.',
        rating: 4.5
        },
         {
        id: 5,
        categoryId: 4,
        name: 'Смарт-часы Xiaomi Redmi Watch 5 Lite 50 мм ', 
        price: 24876,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p86/87507346.jpg?format=gallery-medium',
        likes: 704, 
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-lite-50-mm-chernyi-chernyi-123879550/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jCdzR9z2_dWCzX04-dDG0CO&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BczdOzDT2OnKqS5PrMH2brhlamkEliBbfT7uO7W29ksGlJJ7ddSlhBoChDUQAvD_BwE',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/p86/87507346.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hc2/h97/87197783064606.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hce/he1/87197783195678.jpg?format=gallery-medium'],
        description: 'Redmi Watch 5 Lite с большим безрамочным дисплеем помогут вести активны образ жизни, контролировать ваше здоровье и повысить эффективность при решении повседневных задач.',
        rating: 5.0
        },
      ];
        getCategories(): Category[] {
            return this.categories;
        }

        getProducts(): Product[] {
        return this.products;
        }
}