<?php

namespace App\Http\Middleware;

use Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = $request->user();
        if($user){
            if($user->admin()){
                return $next($request);
            }
        }
        if($user->role == '0'){   
        return redirect(route('kasir'))->with('sukses', 'Anda Login Sebagai KASIR!');
        }
        if($user->role == '2'){   
        return redirect(route('superadmin'))->with('sukses', 'Anda Login Sebagai SUPER ADMIN!');
        }
    }
}
