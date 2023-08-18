

// class BlogData {
//   constructor(img, tag1, tag2,tag3, time, info, admineImg,id) {
//     this.img = img;
//     this.tag1 = tag1;
//     this.tag2 = tag2;
//     this.tag3 = tag3;
//     this.time = time;
//     this.info = info;
//     this.admine = admineImg;
//     this.id = id;
//   }
// }

const blogContainer = document.querySelector('.blog_story--contents');
const filterBtn = document.querySelectorAll('.blog_story-dot');


class Blogs {
  
  blogList = [
  
    {
      category:'travel',
      img: 'image/travel2.jpeg',
      tag1: 'happy',
      tag2: 'fun',
      tag3:'#relax',
      info: 'Relaxation At The Town Base So In Of Inner Unfolding',
      admineImg: 'image/ad1.jpeg',
      name: 'cascady',
      date: '25 may 2022'
    },
    {
      category:'animals',
      img: 'image/blog-dot7.jpeg',
      tag1: 'wild',
      tag2: 'beauty',
      tag3:'#nimesis',
      info: 'panda wildling across in bumblee',
      admineImg: 'https://img.freepik.com/free-photo/young-man-traveler-green-forest-checking-his-mobile-phone_181624-53069.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=ais',
      name:'mikel',
      date: '16 june 2020'
    },
    {
      category:'food',
      img: 'https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.2.1083463234.1681973259&semt=sph',
      tag1: 'hdelicious',
      tag2: 'fun',
      tag3:'#salty',
      info: 'indian cuisine baked chicken wings legs honey mustard sauce serving',
      admineImg: 'https://img.freepik.com/free-photo/playful-hot-african-american-with-afro-hairstyle-pulling-hands-towards-make-selfie-winking-joyfully-smiling-broadly-making-new-profile-pic-social-network_176420-23120.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph',
      name: 'zuby',
      date: '25 may 2022'
    },
    {
      category:'culture',
      img: 'https://img.freepik.com/free-photo/medium-shot-men-playing-music_23-2149029461.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.2.1083463234.1681973259&semt=sph',
      tag1: 'culture',
      tag2: 'fun',
      tag3:'#happy',
      info: 'the igbo culture men playing drum',
      admineImg: 'https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'jackey',
      date: '20 jaunary 2023'
    },
    {
      category:'business',
      img: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'hdelicious',
      tag2: 'fun',
      tag3:'#salty',
      info: 'business to the next level with many and more',
      admineImg: 'https://img.freepik.com/free-photo/playful-hot-african-american-with-afro-hairstyle-pulling-hands-towards-make-selfie-winking-joyfully-smiling-broadly-making-new-profile-pic-social-network_176420-23120.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph',
      name: 'zuby',
      date: '3 april 2022'
    },
    {
      category:'shoes',
      img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'hdelicious',
      tag2: 'shoe',
      tag3:'#elegant',
      info: 'compressed elegant canvas all mature specifird',
      admineImg: 'https://cdn.pixabay.com/photo/2015/11/06/11/32/girl-1026246__340.jpg',
      name: 'zuby',
      date: '1 october 2022'
    },
    {
      category:'space',
      img: 'https://media.istockphoto.com/id/1401783210/photo/star-field-and-nebula.jpg?b=1&s=170667a&w=0&k=20&c=JyxJjLPI9fBXIwgghrmYYMjn3O-5BWfPDB3ND4m-rjQ=',
      tag1: 'nasa',
      tag2: 'space',
      tag3:'#stars',
      info: 'star-field space sphirical launch hole of th 60th',
      admineImg: 'https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg',
      name: 'makeey',
      date: '20 august 2002'
    },
    {
      category:'fashion',
      img: 'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg',
      tag1: 'felicious',
      tag2: 'beauty',
      tag3:'',
      info: 'beautiful hijab elegant  all mature saphire',
      admineImg: 'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg',
      name: 'zuby',
      date: '1 october 2022'
    },
    {
      category:'interio',
      img: 'https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408',
      tag1: 'felicious',
      tag2: 'beauty',
      tag3:'',
      info: 'kitchen interiors splended acquire',
      admineImg: 'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg',
      name: 'mikeely',
      date: '3 september 2023'
    },
    {
      category:'food',
      img: 'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'food',
      tag2: 'yummy',
      tag3:'',
      info: ' food in the kitchen interiors desk...',
      admineImg: 'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg',
      name: 'mikeely',
      date: '3 september 2023'
    },
    {
      category:'interio',
      img: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'interiors',
      tag2: 'comfy',
      tag3:'',
      info: ' comfy in the best interiors desk...',
      admineImg: 'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg',
      name: 'mikeely',
      date: '3 september 2023'
    },
    {
      category:'travel',
      img: 'https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'travel',
      tag2: 'comfort',
      tag3:'#tour',
      info: ' traveling to the best  hotels tour, manifet auro',
      admineImg: 'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg',
      name: 'mikeely',
      date: '3 september 2023'
    },
    {
      category:'fashion',
      img: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'beauty',
      tag2: 'fashion ',
      tag3:'#quality',
      info: ' fashion in the brightest mist gee',
      admineImg: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg',
      name: 'jane deo',
      date: '6 june 2019'
    },
    {
      category:'interio',
      img: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'beauty',
      tag2: 'fashion ',
      tag3:'#quality',
      info: ' fashion in the brightest mist gee',
      admineImg: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg',
      name: 'jane deo',
      date: '6 june 2019'
    },
    {
      category:'travel',
      img: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'beauty',
      tag2: 'fashion ',
      tag3:'#quality',
      info: ' fashion in the brightest mist gee',
      admineImg: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg',
      name: 'jane deo',
      date: '6 june 2019'
    },
    {
      category:'animals',
      img: 'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'beauty',
      tag2: 'wild ',
      tag3:'',
      info: ' fox night beauty in the wild just life',
      admineImg: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg',
      name: 'alex andrew',
      date: '6 april 2022'
    },
    {
      category:'animals',
      img: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag1: 'beauty',
      tag2: 'wild ',
      tag3:'',
      info: ' aa night beauty in the wild just life',
      admineImg: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'ellen depp',
      date: '6 april 2022'
    },
   
  ]

    render(items) {
      let display = items.map((item) => {

        return `
           <article class="blog_story-article" >
              <div class="story-arti_img">
                <img src=${item.img} alt="">
              </div>
              <div class="story-arti_tag">
                <span>#${item.tag1} #${item.tag2} ${item.tag3}</span>
                <span>6 mins read</span>
              </div>
              <div class="story-arti_text">
                <h3>${item.info} </h3>
              </div>
              <div class="story-arti_footer">
                <div class="story-arti_admin">
                  <img src=${item.admineImg} alt="">
                    <div>
                      <h5> by ${item.name}</h5>
                      <span>${item.date} </span>
                    </div>
                </div>
                <div class="read-more">
                  <span>read more</span>
                </div>
              </div>
            </article>
        `
      }).join('');
      blogContainer.innerHTML = display;
    }
    
       
  filterBlog() {
    filterBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        
        filterBtn.forEach((btnStyle) => {
          btnStyle.classList.remove('active');
        })
        e.currentTarget.classList.add('active')
         

        let filter = e.currentTarget.dataset.id;
        const filterHandle = this.blogList.filter((item) => {
          if (item.category === filter) {
            return item;
          }
        })
        if (filter === 'all') {
           this.render(this.blogList)
        } else {
          this.render(filterHandle)
        }
      })
    })
   }
  
 

}

let x = new Blogs()

x.render(x.blogList)
x.filterBlog()
