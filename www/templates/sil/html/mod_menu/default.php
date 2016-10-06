<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_menu
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>
<ul class="top-nav-menu">
<?php 
foreach ($list as $i => $item)
{
	$current = FALSE;
    
    if($item->id == $active_id)
    {
        $current = TRUE;
    }
    
    echo "<li>";
    
    if ($current)
    {
        echo "<a href='".$item->flink."'>".$item->title."</a>";
    }
    else
    {
        echo "<a href='".$item->flink."'>".$item->title."</a>";
    }
}
?>
</ul>