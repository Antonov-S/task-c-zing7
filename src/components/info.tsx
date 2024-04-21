import { services } from "@/lib/constants";

function Info() {
  return (
    <article className="w-[70%] text-dark-blue 2xl:w-[40%] text-xs leading-[170%] tracking-[0px] md:text-[18px]">
      <h2 className="mt-8 font-grotesk text-xl font-semibold leading-[115%] -tracking-[2px] md:text-[48px] lg:mt-[64px]">
        Решения
      </h2>
      <p className="mt-5 lg:mt-[40px]">
        Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме
        услуги за всички видове бизнес – от малки местни предприятия до
        мултинационални компании.
      </p>
      <p className="mt-5 lg:mt-[40px]">
        Ние обработваме вашата пратка като всяка друга голяма товарна пратка –
        старателно и професионално.
      </p>
      <ul className="list-inside list-disc">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </article>
  );
}

export default Info;
