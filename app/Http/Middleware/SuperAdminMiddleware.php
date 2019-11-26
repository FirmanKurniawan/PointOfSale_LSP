<?php

namespace App\Http\Middleware;

use Closure;

class SuperAdminMiddleware
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
            if($user->superadmin()){
                return $next($request);
            }
        }
        if($user->role == '0'){   
        return redirect(route('kasir'))->with('sukses', 'Anda Login Sebagai KASIR!');
        }
        if($user->role == '1'){   
        return redirect(route('admin'))->with('sukses', 'Anda Login Sebagai ADMIN!');
        }
    }
}
