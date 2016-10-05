<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_articles_categories
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

foreach ($list as $item) : 
?>

    <li>
        <?php if($child) {echo "&nbsp";}?>
        <a href="<?php echo JRoute::_(ContentHelperRoute::getCategoryRoute($item->id));?>"><?php echo $item->title;?></a>
    <?php if($params->get('show_children') && count($item->getChildren())) :?>
        <ul>
            <?php 
            $temp = $list;
            
            $list = $item->getChildren();
            $child = TRUE;
            require JModuleHelper::getLayoutPath('mod_articles_categories', $params->get('layout', 'default') . '_items'); 
            $list = $temp; 
            $child = FALSE;           
            ?>
        </ul>
    <?php endif;?>
    
    </li>

<?php endforeach; ?>
