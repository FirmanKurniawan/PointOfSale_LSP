<?php

namespace App\Http\Middleware;

use Closure;

class KasirMiddleware
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
            if($user->kasir()){
                return $next($request);
            }
        }
        if($user->role == '2'){   
        return redirect(route('superadmin'))->with('sukses', 'Anda Login Sebagai SUPER ADMIN!');
        }
        if($user->role == '1'){   
        return redirect(route('admin'))->with('sukses', 'Anda Login Sebagai ADMIN!');
        }
    }
}
