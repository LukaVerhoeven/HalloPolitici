<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Step4Controller extends Controller
{
    public function generateImage(Request $request) {
        $text = $request->text;
        $text_length = strlen($text);
        $politicus_img_path = $request->image_path;

        if ($text_length > 20) {
            $font_size = 13;
            $text = wordwrap($text, 40, "\n");
        }
        else {
            $font_size = 20;
        }



        header("Content-type: image/png");
        $ext = pathinfo($politicus_img_path, PATHINFO_EXTENSION);
        switch ($ext) {
            case 'jpg':
            $image1 = imagecreatefromjpeg($politicus_img_path);
            break;
            case 'png':
            $image1 = imagecreatefrompng($politicus_img_path);
            break;
            case 'gif':
            $image1 = imagecreatefromgif($politicus_img_path);
            break;
            default:
            return "file format not supported.";
            break;
        }

        $img1 = imagescale($image1, 300, 299);
        $image2 = imagecreatefrompng('img/tekstballon.png');
        $white = imagecolorallocate($img1, 255, 255, 255);
        imagecopymerge($img1, $image2, 0, 0, 0, 0, 300, 99, 100);
        // img1, img2, 1_x, 1_y, 2_x, 2_y, balon_width, balon_height, 100
        imagettftext($img1, $font_size, 0, 30, 30, $white, 'img/arial.ttf', $text);

        do {
            $new_name = uniqid();
        } while (file_exists('img/generated/fetest.jpg'));

        imagepng($img1, 'img/generated/'. $new_name .'.png');

        return $new_name;
    }

    public function getImage($id){
        $file = "img/generated/" . $id . '.png';
        if (file_exists($file)) {
            header("Content-Type: image/png");
            header('Content-Length: ' . filesize($file));
            readfile($file);
        }
        else {
            return "image not found.";
        }
    }
}
