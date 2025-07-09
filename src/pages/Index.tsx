import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет интеграция с системой сбора лидов
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                PremiumEstate
              </h1>
            </div>
            <nav className="flex space-x-6">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
              <a
                href="#brochure"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Буклет
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Элитная недвижимость
                  <span className="text-blue-600"> премиум-класса</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Профессиональный подбор недвижимости комфорт и элит класса.
                  Вторичная недвижимость и коммерческие объекты от экспертов
                  рынка.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать буклет
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/56fe04ce-943b-4844-9b8e-ccce1044a7e5.jpg"
                alt="Элитная недвижимость"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">15+ лет</p>
                    <p className="text-gray-600">на рынке</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Комплексные решения для элитной недвижимости
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Home",
                title: "Элитная недвижимость",
                desc: "Эксклюзивные объекты премиум-класса",
              },
              {
                icon: "Building",
                title: "Комфорт класс",
                desc: "Современные квартиры в лучших районах",
              },
              {
                icon: "RefreshCw",
                title: "Вторичная недвижимость",
                desc: "Проверенные объекты с историей",
              },
              {
                icon: "Briefcase",
                title: "Коммерческая недвижимость",
                desc: "Офисы, магазины, склады",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Получите персональное предложение
            </h2>
            <p className="text-xl text-gray-600">
              Заполните анкету, и мы подберем идеальный объект для вас
            </p>
          </div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Анкета клиента
              </CardTitle>
              <CardDescription className="text-center">
                Все поля обязательны для заполнения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя и фамилия
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Введите ваше имя"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+7 (999) 123-45-67"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тип недвижимости
                    </label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, propertyType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="elite">
                          Элитная недвижимость
                        </SelectItem>
                        <SelectItem value="comfort">Комфорт класс</SelectItem>
                        <SelectItem value="secondary">
                          Вторичная недвижимость
                        </SelectItem>
                        <SelectItem value="commercial">
                          Коммерческая недвижимость
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Бюджет
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-10">5-10 млн ₽</SelectItem>
                        <SelectItem value="10-20">10-20 млн ₽</SelectItem>
                        <SelectItem value="20-50">20-50 млн ₽</SelectItem>
                        <SelectItem value="50+">50+ млн ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дополнительные пожелания
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Опишите ваши требования к объекту..."
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
              <p className="text-gray-600">+7 (495) 123-45-68</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@premiumestate.ru</p>
              <p className="text-gray-600">sales@premiumestate.ru</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">Москва, Тверская ул., 15</p>
              <p className="text-gray-600">офис 301</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section id="brochure" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Icon
              name="FileText"
              size={64}
              className="mx-auto mb-6 text-blue-100"
            />
            <h2 className="text-4xl font-bold mb-4">Скачать буклет</h2>
            <p className="text-xl text-blue-100">
              Полный каталог элитной недвижимости с актуальными предложениями
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">200+</h3>
                <p className="text-blue-100">Объектов в каталоге</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-blue-100">Лет на рынке</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">98%</h3>
                <p className="text-blue-100">Довольных клиентов</p>
              </div>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            <Icon name="Download" size={20} className="mr-2" />
            Скачать буклет (PDF, 5.2 МБ)
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">PremiumEstate</span>
              </div>
              <p className="text-gray-400">
                Профессиональный подбор элитной недвижимости премиум-класса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Элитная недвижимость
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Комфорт класс
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Вторичная недвижимость
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Коммерческая недвижимость
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@premiumestate.ru</li>
                <li>Москва, Тверская ул., 15</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Буклет
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Условия работы
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PremiumEstate. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
