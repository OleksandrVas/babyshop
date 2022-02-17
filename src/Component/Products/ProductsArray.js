const productsArray = [
    {
        id: 1,
        nameOfProduct: "Duvet Cover Set Pumpkin ",
        price: 10,
        type: "bestSeller",
        gender: "female",
        categories: "Bathrobes",
        description: `
<div >
    <div className={classes.dynamicDescription}>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-500x625.webp",
        age: "2 - 3",
    },
    {
        id: 2,
        nameOfProduct: "Baby Set Hello Cutie",
        price: 35,
        type: "bestSeller",
        categories: "Bed sets",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product11c-500x625.webp",
        age: "2 - 3",
        gender: "male",
    },
    {
        id: 3,
        nameOfProduct: "Baby Robe Panda Space",
        price: 15,
        type: "bestSeller",
        categories: "Sleepwear",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product5a-500x625.webp",
        age: "2 - 3",
        gender: "female",
    },
    {
        id: 4,
        nameOfProduct: "Duvet Cover Set Cute ",
        price: 20,
        type: "NonBestSeller",
        categories: "Bathrobes",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product2a-500x625.webp",
        age: "1 - 2",
        gender: "male",
    },
    {
        id: 5,
        nameOfProduct: "Baby Robe Let’s play",
        price: 25,
        type: "NonBestSeller",
        categories: "Bed sets",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product7a-500x625.webp",
        age: "2 - 3",
        gender: "male",
    },
    {
        id: 6,
        nameOfProduct: "Baby Set Little Family",
        price: 35,
        type: "NonBestSeller",
        categories: "Sleepwear",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product9c-500x625.webp",
        age: "1 - 2",
        gender: "female",
    },
    {
        id: 7,
        nameOfProduct: "Duvet Cover Set Be Brave",
        price: 10,
        type: "bestSeller",
        categories: "Bathrobes",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product3a-500x625.webp",
        age: "2 - 3",
        gender: "male",
    },
    {
        id: 8,
        nameOfProduct: "Baby Robe A big dream",
        price: 29.99,
        type: "NonBestSeller",
        categories: "Bed sets",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-500x625.webp",
        age: "0 - 2",
        gender: "female",
    },
    {
        id: 9,
        nameOfProduct: "Baby Robe A big dream",
        price: 29.99,
        type: "NonBestSeller",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        categories: "Bed sets",
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-500x625.webp",
        age: "0 - 2",
        gender: "male",
    },
    {
        id: 10,
        nameOfProduct: "Baby Robe A big dream",
        price: 29.99,
        type: "NonBestSeller",
        categories: "Bed sets",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product6a-500x625.webp",
        age: "2 - 3",
        gender: "female",
    },
    {
        id: 11,
        nameOfProduct: "Dream of All Babies ",
        price: 29.99,
        type: "NonBestSeller",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        categories: "Bed sets",
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product11c-500x625.webp",
        age: "1 - 2",
        gender: "male",
    },
    {
        id: 12,
        nameOfProduct: "A big dream",
        price: 2.99,
        type: "NonBestSeller",
        description: `
<div >
    <div>
Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
    </div>
    <ul>
    <li>Maecenas malesuada 5 elit lectus felis, malesuada ultricies.</li>
    <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
    <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
    <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
</ul>
<span>Composition: Main material: 95% Cotton, 5% Polyester</span>

 </div>`,
        categories: "Bed sets",
        src: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product6a-500x625.webp",
        age: "0 - 2",
        gender: "female",
    },
]

export const productObject = (array) => array.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product
    }), {})

export default productsArray