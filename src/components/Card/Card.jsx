import Link from 'next/link'
import React from 'react'

export default function Card({productDetails}) {
  return (
    <div className="group relative max-w-72 border border-slate-300 p-2">
        
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80 ">
            <Link className='h-full w-full' href="/asdfsdf">
                <img
                    src={productDetails.image}
                    alt={productDetails.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </Link>
        </div>
        <div className="mt-auto flex justify-between py-3">
            <div>
                <h3 className="text-sm text-gray-700">
                <a href={productDetails.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {productDetails.title}
                </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{productDetails.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${productDetails.price}</p>
        </div>
        <div className='flex justify-between items-center'>
            <button         
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add to cart</button>
            <button  className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">View Details</button>
        </div>
    </div>
  )
}