
'use client'
import React, { useEffect, useState } from 'react'
import FormInput from '@/components/Inputs/FormInput'
import Dropdown from '@/components/Inputs/Dropdown'
import Ckeditor from '@/components/Inputs/Ckeditor'
import PrimaryBtn from '@/components/Button/PrimaryBtn'
import Form from '@/components/Form/Form'
import usePost from '@/hooks/usePosts'
import useGet from '@/hooks/useGet'


export default function Page({params}) {
  // for form submission 
  const { data, error, loading, postData } = usePost('/userdata/');
  const [userData, setUserData] = useState({})
  
  // for get request 
  const { userDetails, userError, userLoading, fetchData } = useGet();
  const api = '/userdata/'+params.id+'/'


  const submitData = async() => {
    await postData(JSON.stringify(userData))
  }
  

  // useEffect(() => {
  //   fetchData(api);
  //   // console.log(params.id)
  // }, [])


  
  // useEffect(() => {
  //   // fetchData(api);
  //   // console.log(userDetails, 'load')
  //   console.log(userLoading, 'load')

  // }, [userLoading])
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-96" >
          {/* {
            !userLoading ? userDetails["name"] : ""
          } */}
          <Form title="Edit User Info" isLoading={loading}>
            
              <label className="block">
                  <FormInput changedValue={(name) => setUserData({...userData, "name":name })} type="text" label="name" errorMsg={error["name"]} placeholder="Edit your name"/>
              </label>

              <label className="block">
                  <FormInput changedValue={(phone_number) => setUserData({...userData, "phone_number":phone_number })} type="number" label="phone" placeholder="Edit your phone no" />
              </label>


              <label className="block">
                  <FormInput changedValue={(birthdate) => setUserData({...userData, "birthdate":birthdate })} type="date" label="Birthdate" errorMsg={error["birthdate"]}/>
              </label>

              <label className="block">
                  <Dropdown label="Status" changedValue={(active_status) => setUserData({...userData, "active_status":active_status })} />
              </label>

              
              {/* <label className="block border border-black  text-xs p-3">
                  <Dropzone onDrop={acceptedFiles => setUserData({...userData, "profile_picture":acceptedFiles })}>
                      {({getRootProps, getInputProps}) => (
                          <section>
                          <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <p>Drag 'n' drop some files here, or click to select files</p>
                          </div>
                          </section>
                      )}
                  </Dropzone>
              </label> */}
              
              <PrimaryBtn clickHandler={() => submitData()} title="Submit" />
          </Form>
      </div>
      <div className='mt-10'>
          <Ckeditor title="User Details" editorData={(description) => setUserData({...userData, "description":description })}/>
      </div>
    </main>
  )
}
