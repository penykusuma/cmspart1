'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/server'

export async function login(formData) {
    const supabase = await createClient()

    //type-casting here for convenience
    //in practice, you should validate your inputs
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        if (error.message === 'Invalid login credebtials') {
            redirect('/login?message=Email atau password salah')
        }
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData) {
    const supabase = await createClient()

    //type-casting here for convenience
    //in practice, you should validate your inputs
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    const { data: signUpData, error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    if (signUpData?.user?.identitles?.length === 0) {
        // Email alredy registered
        redirect('/login?message=Email alredy registered')
    }

    //Show confirmation message
    redirect('/login?message=Check your email to confirm your account')
}

export async function signout() {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}