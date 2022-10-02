# React Vestel Clone

Vestel test servilerini kullanarak;
- Kategori listeleme
- Kategorilere bağlı alt kategorileri listeleme
- Alt kategoriler altındaki ürünleri listeleme
- Ürün detay sayfası
- Menü bar üzerinden Kategorilere, alt kategorilere, varsa alt kategorilerin altındaki alt kategorilere ait ürünlere yönlendirme işlemleri
- Servislerden gelen PageTitle bilgerini, sayfa title ile değiştirme işlemleri
- Register, Login, Logout işlemleri
- Register ve Login formlar üzerinde form validasyon işlemleri
- Search servisini kullanarak ürün arama işlemi
- Sepete ürün ekleme ve çıkarma işlemleri
- Kayıt olan kullanıcının Login sayfasına veya login olan kullanıcının Ana sayfaya yönlendirilmesi gibi yönlendirme işlemleri
- Eğer kullanıcı Login değilse sepete ürün eklemesini engelleme işlemini
- Servislerden dönen response mesajlarını ve gerekli yerlerde kullanıcı bilgilendirme mesajlarını toast mesajı olarak kullanıcıya gösterme işlemleri

gibi özellikleri projeme ekledim.  

### Projede kullandığım paketler;
- Bootstrap
- Axios
- React-Query
- React-Router-Dom-V6
- React-Redux
- @Reduxjs/tookit
- React-Helmet
- React-Image-Gallery
- React-Toastify
- Formik
- Yup

# Proje Görselleri

Ana Ekran;
![image](https://user-images.githubusercontent.com/98388628/193478625-3a9b3252-3d1e-4cab-b43d-52c536833fa0.png)

MenüBar üzerinde bulunan kategoriere hover olunduğunda;
![image](https://user-images.githubusercontent.com/98388628/193478667-334a776d-7238-4925-9755-57c02712dd01.png)

Alt Kategori sayfasi;
![image](https://user-images.githubusercontent.com/98388628/193478793-dc98692f-2d6c-4cdb-8db9-4e75c46c03e7.png)

İlgili kategori ve alt kategorilere ait ürünler sayfası;
![image](https://user-images.githubusercontent.com/98388628/193478850-d327869c-12e9-40e8-9b83-24ebd82cdc90.png)

Ürün detay sayfası;
![image](https://user-images.githubusercontent.com/98388628/193478891-a79dea41-011f-4c8e-841d-3e0f29b9cab2.png)
Stokta ürün yoksa Sepete Ekle butonu yerine Stok Gelince Haber Ver butonu yer alıyor;
![image](https://user-images.githubusercontent.com/98388628/193479020-6208bfba-8d17-49c9-afb1-99340e374aa4.png)

Ürün Arama (search) sayfası;
![image](https://user-images.githubusercontent.com/98388628/193478989-f33a91f3-6437-41ed-8eff-61efc6211a51.png)
Search hata mesajları(search servisi üzerinden gelen response mesajları);
![image](https://user-images.githubusercontent.com/98388628/193479069-61ec4de1-7997-44e0-8f1a-57658eccb696.png)

Register (Yeni Kayıt) ekranı;
![image](https://user-images.githubusercontent.com/98388628/193479342-bf8373e3-806a-40aa-ab6f-45daf5d43f6d.png)
Validasyon işlemleri;
![image](https://user-images.githubusercontent.com/98388628/193479362-9d5ff010-0180-4312-8a0a-da6e3d6d542d.png)
Servis uzerinden gelen response mesajları;
![image](https://user-images.githubusercontent.com/98388628/193479398-ab132871-4a5c-4408-a169-55ceec1d02f1.png)

Login (giriş) ekrnı;
![image](https://user-images.githubusercontent.com/98388628/193479438-269b7719-929b-4edf-863e-98adf421354c.png)
Validasyon işlemleri;
![image](https://user-images.githubusercontent.com/98388628/193479461-8e6c029b-8ca9-4969-9d55-b035cf78f80d.png)
Giriş işlemi başarılı olduğunda yönelndirme işlemi ve header bölmündeki yapının değişmesi
![image](https://user-images.githubusercontent.com/98388628/193479493-c924dae7-ad58-4c14-a0db-c55ddab623e0.png)

Alışveriş Sepeti boş iken görünen yapı;
![image](https://user-images.githubusercontent.com/98388628/193479605-b7823d85-1f01-45bd-bcfc-6938e5075089.png)
Alışveriş sepetinde ürün varsa görünen yapı;
![image](https://user-images.githubusercontent.com/98388628/193479670-8586f4d1-4d54-41c4-8f04-084796953777.png)
Uyarı mesajları;
![image](https://user-images.githubusercontent.com/98388628/193479686-5aad8c4c-05d6-4f5f-913d-21821ddd6cda.png)
![image](https://user-images.githubusercontent.com/98388628/193479704-0074a07d-67a4-467d-84d6-81ca425c7822.png)
![image](https://user-images.githubusercontent.com/98388628/193479711-e8f33dfe-1779-4749-b4f7-c93ce824bf14.png)
![image](https://user-images.githubusercontent.com/98388628/193479728-754c7dce-7887-4c2c-a77d-35d5d0f3d456.png)
![image](https://user-images.githubusercontent.com/98388628/193479754-38be9ab8-670e-4500-a3a5-5c85243da97b.png)

Sayfa bulunamadı Uyarısı (Not Found);
![image](https://user-images.githubusercontent.com/98388628/193479886-4024001d-7cfc-459e-93db-0e40acbad48c.png)

## Responsive Tasarım;
![image](https://user-images.githubusercontent.com/98388628/193480069-1e12f115-13a5-48a7-8f44-584a3ace9be4.png)
![image](https://user-images.githubusercontent.com/98388628/193480075-81c4bb91-e6a2-4d92-b2db-3ce06be4bab6.png)
![image](https://user-images.githubusercontent.com/98388628/193480082-ea2963ae-4b26-4fe4-959e-aa075d4b2eb7.png)
![image](https://user-images.githubusercontent.com/98388628/193480090-025a9c5d-4825-4dcb-9581-beb1801a74f7.png)
![image](https://user-images.githubusercontent.com/98388628/193480096-652b72de-4775-4bb6-a587-af42d7eb0cad.png)
![image](https://user-images.githubusercontent.com/98388628/193480115-6833f17e-605d-40d6-9ce4-a8b60d90ba0b.png)
![image](https://user-images.githubusercontent.com/98388628/193480124-1057131c-04a1-424d-a113-e4b01055554b.png)
![image](https://user-images.githubusercontent.com/98388628/193480151-8573527b-e666-4ae1-93b2-edacd5e073d8.png)
![image](https://user-images.githubusercontent.com/98388628/193480167-1259a30a-ee17-450b-9581-312108017596.png)
![image](https://user-images.githubusercontent.com/98388628/193480174-e7e9711d-96d1-47cc-b13d-d0397ded7570.png)
![image](https://user-images.githubusercontent.com/98388628/193480185-80b96508-5441-43b5-8ae8-0997f27262a2.png)
![image](https://user-images.githubusercontent.com/98388628/193480190-003805b9-553e-460d-bbe6-f694888eae2d.png)
![image](https://user-images.githubusercontent.com/98388628/193480198-af8ed3c1-4ac5-41af-bf0a-9d2fa48070b5.png)
![image](https://user-images.githubusercontent.com/98388628/193480210-8eb9fc90-a415-4cdb-b949-1cc681bfe6d4.png)
![image](https://user-images.githubusercontent.com/98388628/193480217-a3c9a21f-5a23-4d51-b9ad-b3f9a08844be.png)
![image](https://user-images.githubusercontent.com/98388628/193480253-368fe513-eabf-4a72-aee4-3ccb8caae837.png)
![image](https://user-images.githubusercontent.com/98388628/193480265-f912932f-23e5-4e29-8ce7-2b94d8a7b153.png)
![image](https://user-images.githubusercontent.com/98388628/193480289-b9b451c7-14b0-4bb4-92aa-fc358490962c.png)




