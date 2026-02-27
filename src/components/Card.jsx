import korm from './../assets/korm.jpg'
import leaf from './../assets/leaf.jpg'
import lapa from './../assets/paw-print.svg'
import strelka from './../assets/arrow-right.svg'

export default function Card() {
    return (
        <div className='min-h-screen flex flex-col'>
            <main className='flex-1'>
                <div className='max-w-6xl mx-auto px-4 py-12'>
                    <div className='grid md:grid-cols-2 gap-12'>

                        <div className='rounded-xl p-8 flex items-center justify-center'>
                            <img src={korm} alt="Пакет корма" className='min-h-130 min-w-130' />
                        </div>

                        <div>
                            <h1 className='font-inter text-4xl font-medium mb-4'>WellWet Holistic Sensitive Low-Grain Veal</h1>
                            <p className='font-inter font-regular text-xl text-gray-600 mb-6'>Для взрослых собак</p>

                            <p className='text-lg mb-8 font-inter font-regular'>Holistic-корм для собак с чувствительным пищеварением. Натуральный состав, минимальное содержание зерновых и контроль качества на каждом этапе производства.</p>
                            <div className='px-4'>
                                <div className='rounded-xl bg-[#06B2D3] flex justify-between my-4 px-4 py-1'>
                                    <ul className='space-y-3 mb-8 text-sm'>
                                        <li className='text-xl'>Ключевые характеристики</li>
                                        <li>Содержимое:</li>
                                        <li>– Натуральные источники животного белка</li>
                                        <li>– Low-grain рецепт</li>
                                        <li>– Без кукурузы и пшеницы</li>
                                        <li>– Без искусственных красителей и ароматизаторов</li>
                                        <li>– Подходит для ежедневного питания</li>
                                    </ul>
                                    <img src={lapa} className='items-start' />
                                </div>

                                <div className='rounded-xl bg-[#06B2D3] flex justify-between text-center my-4 px-4 py-3'>
                                    <ul className='text-xl'>
                                        <li>О составе</li>
                                    </ul>
                                    <img src={lapa} className='items-start'/>
                                </div>

                                <div className='rounded-xl bg-[#06B2D3] flex justify-between text-center my-4 px-4 py-3'>
                                    <ul className='text-xl'>
                                        <li>Рекомендации по кормлению</li>
                                    </ul>
                                    <img src={lapa} className='items-start'/>
                                </div>

                                <div className='rounded-xl bg-[#06B2D3] flex justify-between text-center my-4 px-4 py-3'>
                                    <ul className='text-xl'>
                                        <li>Для кого подойдёт</li>
                                    </ul>
                                    <img src={lapa} className='items-start'/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className='py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white'></section>
                <div className='rounded-[40px] flex flex-col md:flex-row'>
                    <div className='md:w2/5 h-64 md:h-auto relative'>
                    <div className='absolute inset-0 flex items-end justify-center p-4'>

                            <div className='flex items-center justify-center'>
                                <img src={leaf}/>
                            </div>
                        </div>
                    </div>
                </div>
                

            </main>
        </div>
    );
}