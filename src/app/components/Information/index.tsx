import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import CustomSlider from '../CustomSlider';
import { SliderProps } from '@/app/types/SliderProps';

const Information: React.FC = () => {

    const ArrayImagesSlider = {
        brands: [
            ['/images/hivideo_logo.png', 'Логотип бренда компании HiVideo Electronics Limited'],
            ['/images/ezviz_logo.png', 'Логотип международного бренда EZVIZ,  интеллектуальных решений для безопасности и жизни'],
            ['/images/iflow_logo.png', 'Логотип бренда iFLOW, поставляющий оборудование и интеллектуальные решения в сфере комплексных систем безопасности.'],
            ['/images/novicam_logo.png', 'Логотип бренда Novicam, производитель оборудования для систем видеонаблюдения, контроля доступа (СКУД) и домофонии'],
            ['/images/alhua_logo.png', 'Логотип компании Alhua Technology Co Ltd., производящая камеры и цифровые видеорегистраторы для систем видеонаблюдения (CCTV)'],
        ],
        projects: [
            ['/images/project_1.jpg', 'Камера ночного видеонаблюдения на столбе'],
            ['/images/project_2.jpg', 'Две камеры установленные по периметру гаража'],
            ['/images/project_3.jpg', 'Белый кондиционер с красивой подсветкой'],
            ['/images/project_4.jpg', 'Белые ленточные лампы на потолке'],
            ['/images/project_5.jpg', 'Камера видеонаблюдения на кирпичной стене'],
            ['/images/project_6.jpg', 'Белая камера видеонаблюдения на крыше с подсветкой'],
            ['/images/project_7.jpg', 'Кондиционер висящий под окном на стене'],
            ['/images/project_8.jpg', 'Цилиндрические черные лампы'],
            ['/images/project_9.jpg', 'Камера видеонаблюдения для участка'],
            ['/images/project_10.jpg', 'Камера видеонаблюдения на заведении'],
            ['/images/project_11.jpg', 'Кондиционер в комнате рядом с занавеской'],
            ['/images/project_12.jpg', 'Электромонтажные работы в квартире на потолке'],
            ['/images/project_13.jpg', 'Белая красивая камера видеонаблюдения'],
            ['/images/project_14.jpg', 'Камера видеонаблюдения для безопасности'],
            ['/images/project_15.jpg', 'Красивый белый кондиционер окруженный гирляндами'],
            ['/images/project_16.jpg', 'Телекоммуникационный шкаф для систем видеонаблюдения'],
            ['/images/project_17.jpg', 'Камера видеонаблюдения в офисе'],
            ['/images/project_18.jpg', 'Камера видеонаблюдения на улице'],
            ['/images/project_19.jpg', 'Шкаф с различной электрикой'],
            ['/images/project_20.jpg', 'Трансляция изображения и архивирование с камер'],
            ['/images/project_21.jpg', 'Красивая черная тройная розетка в плиточной стене'],
            ['/images/project_22.jpg', 'Белая подсветка по периметру дома с помощью цилиндрических светильников'],
            ['/images/project_23.jpg', 'Лампа на заборе для освещения участка'],
            ['/images/project_24.jpg', 'Камера видеонаблюдения на входе'],
            ['/images/project_25.jpg', 'Белая цилиндрическая лампа для подсветки кирпичной стены'],
            ['/images/project_26.jpg', 'Белый кондиционер в комнате на потолке'],
            ['/images/project_27.jpg', 'Камера видеонаблюдения для безопасности участка в своем доме'],
            ['/images/project_28.jpg', 'Устройство для просмотра видео с камер удаленно и для управления камерами видеонаблюдения'],
            ['/images/project_29.jpg', 'Камера слежения в пункте выдачи заказов (ПВЗ)'],
            ['/images/project_30.jpg', 'Управление через ПК записями с камер видеонаблюдения'],
            ['/images/project_31.jpg', 'Вид объекта сверху с камеры видеонаблюдения'],
            ['/images/project_32.jpg', 'Наблюдение за офисом с телефона'],
            ['/images/project_33.jpg', 'Камера видеонаблюдения на вагончике для слежения'],
            ['/images/project_34.jpg', 'Камера видеонаблюдения для слежения за домом, участком и близких'],
            ['/images/project_35.jpg', 'Установка красивого освещения в виде ламп в потолке в комнату, на кухне'],
        ]
    };

    const SettingsSlider = {
        brands: {
            dots: false,
            infinity: true,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            pauseOnHover: false,
        },
        projects: {
            dots: true,
            infinity: false,
            speed: 1000,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            slidesToScroll: 1,
        },
    };

    const StylesSlider = {
        brands: {
            container: {
                rowGap: '15px',
            },
            title: {
                fontSize: '14px',
                fontSizeMobile: '10px',
                opacity: '0.6',
                textAlign: 'center',
            },
            buttons: false,
            imgSizes: 'contain',
            class: 'no_animated'
        },
        projects: {
            container: {
                rowGap: '35px',
            },
            title: {
                fontSize: '32px',
                fontSizeMobile: '28px',
                opacity: '0.8',
                textAlign: 'center',
                marginTop: '60px'
            },
            buttons: true,
            imgSizes: 'contain',
            class: 'hidden_img'
        }
    };

    const SliderProps = {
        brands: {
            title: "Работаем с различными брендами от ведущих производителей",
            arrayURL: ArrayImagesSlider.brands,
            settings: SettingsSlider.brands,
            styles: StylesSlider.brands
        },
        projects: {
            title: "Примеры наших работ",
            arrayURL: ArrayImagesSlider.projects,
            settings: SettingsSlider.projects,
            styles: StylesSlider.projects
        }
    };

    return (
        <section className={style.information} id='information'>
            <article className={style.information__article_first}>
                <div className={style.article_first__box_text}>
                    <h2 className={`${style.box_text__title} hidden_h`}>О компании</h2>
                    <p className={`${style.box_text__description} hidden_p`}>
                        🏢 Компания «ВИДЕОХРАНИТЕЛЬ» внедряет передовые комплексы видеонаблюдения с функцией распознавания лиц, автоматического отслеживания движений и интеллектуального анализа событий. <br />
                        💡 Благодаря таким решениям:
                        Вам не нужны десятки сторожей и контролёров объекте.
                        Система круглосуточно фиксирует всё, что происходит.
                        Вы получаете мгновенные уведомления о подозрительных ситуациях.
                        Экономия на зарплатах персоналу достигает сотен тысяч рублей в год.
                        Мы проектируем, устанавливаем и обслуживаем системы «под ключ».
                        Ваш объект всегда под защитой - без лишних затрат.
                    </p>
                </div>
                <div className={style.article_first__box_image}>
                    <Image src={'/images/information_image.png'} alt='Универсальная камера для наблюдения на доме' className='hidden_img' style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                </div>
                <div className={style.article_first__box_slider}><CustomSlider props={SliderProps.brands as SliderProps["props"]} /></div>
            </article>
            <article className={style.information__article_last}>
                <CustomSlider props={SliderProps.projects as SliderProps["props"]} />
            </article>
        </section>
    );
};

export default Information;